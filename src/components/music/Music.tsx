import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { MusicReadDto } from "./MusicDto";
import MusicCard from "./MusicCard";

const Music: React.FC = () => {
  const [musicList, setMusicList] = useState<MusicReadDto[] | null>(null);

  console.log('render music');
  useEffect(() => {
    fetch("/api/music")
      .then((response) => response.json())
      .then((data) => {
        setMusicList(data);
      });
  }, []);

  return musicList ? (
    <Container>
      <Grid2 container spacing={3}>
        {musicList.map((music) => MusicCard({ music }))}
      </Grid2>
    </Container>
  ) : (
    <Container>
      <Typography>Loading Music...</Typography>
    </Container>
  );
};

export default Music;
