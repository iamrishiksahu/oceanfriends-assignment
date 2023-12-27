import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: '1.5rem'
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.25rem'
    },
    h3: {
      fontWeight: 700,
      fontSize: '12px',
      color: '#a0a4b2'
    },
    fontFamily: 'poppins',
    fontSize: 12,
  },
});

export default DarkTheme