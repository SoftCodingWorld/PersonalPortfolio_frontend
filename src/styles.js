import { createTheme } from "@mui/material/styles";

const drawerWidth = 240;
const primaryColor = "#fefefe";
const secondaryColor = "#2a2d42";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: primaryColor,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: (theme) => ({
          // Customize the app bar color to match the image's blue
          backgroundColor: primaryColor, // Replace with the color code from your image
          // Add other style overrides as needed
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#3f404c", // Assuming you want white text on the buttons
          // Add other button styles as needed
          "&.Mui-focusVisible": {
            // Example: change background color when the button is focused with keyboard
            backgroundColor: "white",
            color: "#1976d2"
            // Add other focus-visible styles here
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          paper: {
            marginTop: "64px",
            width: drawerWidth,
          },
        },
      },
    },
    MySidebar: {
      styleOverrides: {
        root: {
          marginTop: "64px",
        },
      },
    },
  },
  typography: {
    body1: {
      color: primaryColor,
    },
    h4: {
      color: primaryColor,
    },
    h5: {
      color: primaryColor,
    },
    subtitle1: {
      color: primaryColor,
    },
  },
});

export default theme;
