import { Box, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import BottomNav from './components/navigation/BottomNav';
import TopBar from './components/topbar/TopBar';
import DarkTheme from './themes/DarkTheme';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import Catalogue from './components/Catalogue';
import History from './components/History';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box className="App">
        <Box className="MainContainer">
          <TopBar />
          <Box sx={{ flex: '1' }}>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='catalogue' element={<Catalogue />} />
                <Route path='history' element={<History />} />
                <Route path='card/:type' element={<CardDetails />} />
              </Route>
            </Routes>

          </Box>


          <BottomNav />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
