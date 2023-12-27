import { Box, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import BottomNav from './components/navigation/BottomNav';
import TopBar from './components/topbar/TopBar';
import DarkTheme from './themes/DarkTheme';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box className="App">
        <Box className="MainContainer">
          <TopBar />

          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path='catalogue' element={<Catalogue/>} />
              <Route path='history' element={<h2>hist</h2>} />
              <Route path='card/:type' element={<CardDetails />} />
            </Route>
          </Routes>


          <BottomNav />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
