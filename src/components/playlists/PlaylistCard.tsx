import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PlaylistReadDto } from "./PlaylistDto";
import Grid2 from "@mui/material/Grid2";

type PlaylistCardProps = {
  playlist: PlaylistReadDto;
};

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
		<Grid2 key={playlist.playlistId}>
			<Card>
				<CardContent>
					<Typography variant="h6" component="div">
						{playlist.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{playlist.description}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						href={`https://www.youtube.com/playlist?list=${playlist.ytPlaylistId}`}
						target="_blank"
						rel="noreferrer"
						style={{ marginTop: "1rem" }}
					>
						View Playlist
					</Button>
				</CardContent>
			</Card>
		</Grid2>
  );
};

export default PlaylistCard;
