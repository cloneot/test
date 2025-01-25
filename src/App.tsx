import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MusicList from "./components/music/MusicList";
import PlaylistList from "./components/playlists/PlaylistList";
import Tags from "./components/tags/Tags";
import TopBar from "./components/TopBar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./components/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000", // YouTube 빨강
      contrastText: "#FFFFFF", // 흰색 텍스트
    },
    secondary: {
      main: "#282828", // 어두운 회색
      contrastText: "#FFFFFF", // 흰색 텍스트
    },
    background: {
      default: "#FFFFFF", // 흰색 배경
      paper: "#FFFFFF", // 카드와 같은 종이 배경
    },
    text: {
      primary: "#000000", // 기본 텍스트 (검정색)
      secondary: "#606060", // 보조 텍스트 (회색)
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // "&:visited": {
          //   color: "inherit",
          // },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/music" element={<MusicList />}></Route>
          <Route path="/playlists" element={<PlaylistList />}></Route>
          <Route path="/tags" element={<Tags />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
