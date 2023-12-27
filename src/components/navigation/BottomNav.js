import React from 'react'
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = React.useState('home');

  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 'home') {
      navigate('/')
    } else if (newValue == 'menu') {
      // Do nothing
    } else {
      navigate(`/${newValue}`)
    }
  };

  return (
    <BottomNavigation sx={{
      width: '100%',
      position: 'sticky',
      bottom: 0,
      borderRadius: '1.25rem 1.25rem 0 0',
      background: 'linear-gradient(180deg, #303b5b, #1b2542)',
      boxShadow: '-10px 0 2rem #00000040'
    }} value={value} onChange={handleChange}>
      <BotNavAction
        value="home"
        icon={<i className="fi fi-rr-house-chimney"></i>}
      />
      <BotNavAction
        value="catalogue"
        icon={<i className="fi fi-rr-boxes"></i>}
      />
      <BotNavAction
        value="history"
        icon={<i className="fi fi-rr-time-past"></i>}
      />
      <BotNavAction
        value="menu"
        icon={<i className="fi fi-br-menu-burger"></i>}
      />
    </BottomNavigation>
  );
}

export default BottomNav

const BotNavAction = styled(BottomNavigationAction)({
  fontSize: '1.125rem',
  "& i": {
    color: '#7a91d2'
  },
  "&.Mui-selected i": {
    background: 'linear-gradient(0deg, #7557fd, #6195ff)',
    borderRadius: '50%',
    width: '2.75rem',
    height: '2.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 5px 0.25rem #00000040',
  }
})