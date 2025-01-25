import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import PlaylistCard from "./PlaylistCard";

type Playlist = {
  playlistId: number;
  ytPlaylistId: string;
  title: string;
  description: string;
};

const Playlists: React.FC = () => {
  const [playlistList, setPlaylistList] = useState<Playlist[] | null>(null);

  console.log("render playlists");
  useEffect(() => {
    fetch("/api/playlists")
      .then((response) => {
        if(!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setPlaylistList(data);
      });
  }, []);

  console.log(playlistList);
  return playlistList ? (
    <Container>
      <Grid2 container spacing={3}>
        {playlistList.map((playlist) => PlaylistCard({ playlist }))}
      </Grid2>
    </Container>
  ) : (
    <Container>
      <Typography>Loading Playlists...</Typography>
    </Container>
  );
};

export default Playlists;
