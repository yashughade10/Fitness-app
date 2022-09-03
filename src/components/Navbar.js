import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/body-part.png'
import { borderBottom } from '@mui/system';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20px" >
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{width: '60px', height:'60px', margin:'0px 20px' }} />
      </Link>
      <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center"
        >
          <Link to="/">Home</Link>
          <a href="#exercises" style={{textDecoration: 'None', color:'#3A1212', borderBottom:'3px solid #FF2625'}} >Exercises</a>
          <a href="#shorts" style={{textDecoration: 'None', color:'#3A1212', borderBottom:'3px solid #FF2625'}} >Shorts</a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
