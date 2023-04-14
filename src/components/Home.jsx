import { Typography, AppBar, Toolbar, Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { handleCardClick } from './Teachers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
register();

const Home = () => {

  return (
    <div style={{
        zIndex: 0,
      }}>
       
        <div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: -1
}}></div>
        <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(https://i.ibb.co/vhSzY7z/Picsart-23-02-10-01-48-06-236.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px)',
        zIndex: -2,
      }}      
    >
        </div>
        <div style={{paddingTop:'50px' }}>
          <img class='thumb' src="https://i.ibb.co/vhSzY7z/Picsart-23-02-10-01-48-06-236.jpg" />
        </div>
        <div>
            <br></br>
            <Typography color='#ffffff' variant='h3'>WANDERLUST</Typography>
        </div>
        <div>
            <br></br>
            <Typography color='#ffffff' variant='subtitle1' style={{ maxWidth: '80%', margin: '0 auto' }}>
            Welcome to Wanderlust, your ultimate travel companion! Our cutting-edge technology makes discovering new and exciting places effortless. Say goodbye to endlessly scrolling through travel websites and enjoy a hassle-free planning experience with Wanderlust.

We offer a variety of features to make your travel experience unforgettable. Our intelligent bot generates a list of popular attractions, landmarks, museums, restaurants, and outdoor activities near any location you desire. Whether you're looking for historical landmarks, trendy restaurants, or thrilling outdoor activities, our bot has got you covered.

With Wanderlust, you'll never run out of exciting places to explore. We pride ourselves on providing personalized recommendations based on your preferences and interests. Whether you're a solo traveler, a couple, or a family, we have something for everyone.

Our website is user-friendly and easy to navigate. You can browse our popular destinations or search for specific locations to get started. We also offer a blog section with travel guides, tips, and stories to inspire your wanderlust.

Join the travel revolution and start exploring the world like never before with Wanderlust as your travel buddy. Sign up now to plan your next adventure!
            </Typography>

<Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("0f8l9c")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHV2OM0aheVshmUGTJ1er45qyN3TVntSK_wfjtCMrBv4TVoZ_uMn14IYG4z-Ns5349AHlFxtA5k0mqmA"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "France"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
    <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleCardClick("03rk0")}>
              <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdbYl7tp3Ig3zMBgIbkEo215qLi0tAiBuEZUUR2oNNh0E7--_jprI9UNBKG8B_mtYqP7Q8I8QiwLf9Q"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    "India"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "South Asian nation with cities Delhi & Mumbai, the Taj Mahal mausoleum, temples & the Himalayas."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
        </SwiperSlide>
      </Swiper>


        </div>
    </div>
  );
};

export default Home;
