import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Link,
  useTheme,
  FormGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
// import { useGoogleLogin } from "@react-oauth/google";

const TopBar: React.FC = () => {
  const theme = useTheme();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/users/me")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        setUser(null);
      });
  }, []);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Link
          href="/"
          underline="none"
          variant="h6"
          style={{ flexGrow: 1 }}
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.contrastText,
          }}
        >
          MyApp
        </Link>

        <Box
          sx={{
            flexGrow: 8,
            display: "flex",
            gap: 1,
          }}
        >
          <Button color="inherit" component={Link} href="/music">
            music
          </Button>
          <Button color="inherit" component={Link} href="/playlists">
            playlists
          </Button>
          <Button color="inherit" component={Link} href="/tags">
            tags
          </Button>
        </Box>

        {/* user is null -> /auth/login button
				user is not null -> display user.username */}
        {user ? (
          user.username
        ) : (
          <Box
            component="form"
            action="api/auth/login"
            method="POST"
            sx={{ textAlign: "center", marginTop: 4 }}
          >
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </Box>
        )}

        {/* <Box
          component="form"
          action="api/auth/logout"
          method="POST"
          sx={{ textAlign: "center", marginTop: 4 }}
        >
          <Button type="submit" variant="contained" color="primary">
            Log Out
          </Button>
        </Box> */}

        {/* <Box>
          <IconButton
            onClick={() => {
              login();
            }}
          >
            <GoogleIcon />
          </IconButton>
          <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
