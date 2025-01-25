import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

interface CreateMusicModalProps {
  onSubmit: () => void;
}

const CreateMusicModal: React.FC<CreateMusicModalProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [ytVideoId, setYtVideoId] = useState("");
  const [error, setError] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setYtVideoId("");
    setError("");
  };

  const handleSubmit = async () => {
    setError("");
    console.log(`YouTube Video ID submitted: ${ytVideoId}`);

    try {
      const res = await fetch(`${API_URL}/music`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ytVideoId }),
      });
      if (!res.ok) {
        const data: { statusCode: number; message: string; path: string } =
          await res.json();
        throw new Error(data.message);
      }
      console.log("Music added successfully");
      onSubmit();
      handleClose();
    } catch (err) {
      console.error("Failed to add music");
      setError((err as Error)?.message || "unknown error");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        +
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            Enter YouTube Video ID
          </Typography>
          <TextField
            fullWidth
            label="Video ID"
            variant="outlined"
            value={ytVideoId}
            onChange={(e) => setYtVideoId(e.target.value)}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            추가
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateMusicModal;
