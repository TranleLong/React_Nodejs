import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light', // default
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    // ghi đè cái theme
    text: {
      secondary: red[500],
    },
  },
});

export default theme;