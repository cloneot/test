import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MusicReadDto } from "./MusicDto";
import Grid2 from "@mui/material/Grid2";

type MusicCardProps = {
  music: MusicReadDto;
};

const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  return (
    <Grid2 key={music.musicId}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={music.thumbnailPath}
          alt={music.title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {music.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`https://www.youtube.com/watch?v=${music.ytVideoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "1rem" }}
          >
            Watch on YouTube
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default MusicCard;
