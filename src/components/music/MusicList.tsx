import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { MusicReadDto } from "./MusicDto";
import MusicCard from "./MusicCard";
import CreateMusicModal from "./CreateMusicModal";

const MusicList: React.FC = () => {
  const [musicList, setMusicList] = useState<MusicReadDto[] | null>(null);
  const [triggerEffect, setTriggerEffect] = useState(false);

  const triggerReload = () => {
    setTriggerEffect((prev) => !prev);
  };

  console.log("render music");
  useEffect(() => {
    fetch(`${API_URL}/music`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMusicList(data);
      });
  }, [triggerEffect]);

  return musicList ? (
    <Container>
      <CreateMusicModal onSubmit={triggerReload} />
      <Grid2 container spacing={3}>
        {musicList.map((music) => MusicCard({ music }))}
      </Grid2>
    </Container>
  ) : (
    <Container>
      <CreateMusicModal onSubmit={triggerReload} />
      <Typography>Loading Music...</Typography>
    </Container>
  );
};

export default MusicList;
