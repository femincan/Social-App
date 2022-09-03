import { useState } from 'react';
import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkLightTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={darkLightTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;