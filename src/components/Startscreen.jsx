import { Typography, AppBar, Toolbar, Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';

const Startscreen = () => {
    const [bgimg, setBgimg] = useState('');
  const getRandomImage = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'DM_M2Fyeq2X1uRcbBHlFSah9LeE63RDOKJdfl3yG21Q',
          query: 'landscape',
          orientation: 'landscape',
        },
      });
      const imageUrl = response.data.urls.regular;
      setBgimg(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRandomImage();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
    >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <GridLoader color="#36d7b7" />
        </Box>

    </div>
  );
};

export default Startscreen;
