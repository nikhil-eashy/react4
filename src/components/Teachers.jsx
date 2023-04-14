import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, TextField, Button, Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Search } from '@mui/icons-material';
import RoomIcon from '@mui/icons-material/Room';

const Teachers = () => {
  const [places, setPlaces] = useState([]);
  const [headimg, setHeadimg] = useState([]);
  const [things, setThings] = useState([]);
  const [thingshead, setThingshead] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isplaces, setIsplaces] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    console.log("Submitted")
    event.preventDefault();
    setLoading(true);
    axios.get(`https://thingstodo.nikhileashy9.workers.dev/search?query=${query}`)
      .then(response => {
        console.log(response.data)
        setPlaces(response.data.data)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCardClick = (id) => {
    axios.get(`https://thingstodo.nikhileashy9.workers.dev/place/${id}`)
      .then(response => {
        console.log(response.data)
        setThingshead(response.data)
        const firstImage = response.data.data[0].images.default;
        setHeadimg(firstImage)
        setThings(response.data.data)
        setIsplaces(true)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
  
    {!loading && !isplaces &&(
      <div style={{
                paddingTop: "50px"
              }}>
      <form onSubmit={handleSubmit}>
      <TextField
        value={query}
        onChange={handleInputChange}
        label="Enter place name"
        variant="outlined"
        sx={{ mr: 1 }}
      />
      <IconButton type="submit">
      {loading ? <CircularProgress size={24} /> : <SearchIcon/>}
      </IconButton>
    </form>

      </div>)}
      <br />
      {!loading && !isplaces &&(
      <div>
        {places.map((value, index) => (
          <div key={value.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick(value.id)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <br />
          </div>
        ))}
      </div>)}

      {!loading && isplaces && (
        <div style={{
  position: 'relative',
  width: '100vw',
  height: '100vh'
}}>
  <div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'rgba(0, 0, 0, 0.9)',
  }}
></div>
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${headimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(10px)',
      zIndex: -1
    }}
  />
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 0
  }} />
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  }}>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img
        className="thumb"
        src={headimg}
      />
      <br />
      <Typography  color="#ffffff" variant="h2" gutterBottom>{thingshead.name}</Typography>
      <Typography color="#ffffff" variant="h5" gutterBottom>{thingshead.description}</Typography>
      <Typography color="#ffffff" variant="subtitle1" gutterBottom style={{ maxWidth: '600px', margin: '0 auto' }}>{thingshead.about}</Typography>
      <br />
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {things.map((value, index) => (
          <div key={value.id} style={{ margin: '10px' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.images.default}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                  <Typography component="legend">{value.rating.raters} Ratings</Typography>
                  <Rating name="read-only" value={value.rating.star} precision={0.5} readOnly />
                  <br></br><br></br>
                  <a target="_blank" style={{ textDecoration: 'none' }} href={value.map}>
  <Button variant="contained" endIcon={<RoomIcon />}>
    Location
  </Button>
</a>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
      
    </div>
  </div>
)}
    </div>
  )
}


export default Teachers
export function handleCardClick(id){
  handleCardClick(id)
}