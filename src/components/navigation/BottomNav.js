import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const BottomNav = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 10 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
        //   icon={}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
        //   icon={}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
        //   icon={}
        />
        <BottomNavigationAction label="Folder" value="folder" 
        />
      </BottomNavigation>
    );
}

export default BottomNav