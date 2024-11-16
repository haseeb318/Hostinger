import React, { useState } from 'react';
import { Card, Grid, Typography, Box, Button, CardMedia } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const TvComp = () => {
  const [color, setColor] = useState("grey");

  // Dynamic array of images
  const images = [
    '/images/TVImage_1.webp',
    '/images/TVImage_1.webp',
    // Add more images as needed
  ];

  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center"
      sx={{
        marginY: 6,
        height: "auto",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
     
      <Card 
        sx={{
          marginY: "1rem",
          width: { xs: "90%", sm: "70%", md: "400px" }, 
          height: { xs: "300px", md: "450px" },
          boxShadow: {xs:"none",md:"0 2px 4px 0 rgba(0, 0, 0, 0.2)"},
          border: {xs:"none",md:"2px solid rgba(0, 0, 0, 0.2)"},
          borderRadius: 3,
          paddingX: 2,
        }}
      >
        
        {/* Carousel */}
        <Carousel
          showThumbs={false}
          showStatus={true}
          infiniteLoop
          emulateTouch
          showIndicators={false}
          statusFormatter={(current, total) => (
            <div style={{
              color: 'white', 
              backgroundColor: 'black',
              padding: '4px 8px',
              borderRadius: '5px',
              // position:"relative",
              // top:{md:"22rem", xs:"16rem"}

            }}>
              {`${current} / ${total}`}
            </div>
          )}
        >
          {images.map((src, index) => (
            <CardMedia
              key={index}
              component="img"
              image={src}
              sx={{
                width: '100%',
                height: { xs: '300px', md: '500px' }, // Responsive height
                objectFit: 'contain',
              }}
            />
          ))}
        </Carousel>
      </Card>

      {/* Product Details Section */}
      <Box 
        sx={{
          marginY: "1rem",
          marginX: { xs: 5, md: 6 },
          width: { xs: "90%", sm: "80%", md: "30%" },
          backgroundColor: "white"
        }}
      >
        <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" }, paddingBottom: 2,  }}>
          Samsung 55 Inch Curved 4K HD Smart LED TV (55Q8C)
        </Typography>
        <Typography sx={{ fontSize: "11px", paddingBottom: 2 }}>
          5.0 ⭐⭐⭐⭐⭐ 1 Ratings
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#909090" }}>
          HomeShopping Price
        </Typography>
        <Typography sx={{ fontSize: { xs: "20px", md: "24px" } }}>
          Rs 382,323
        </Typography>

        <Typography 
          sx={{
            fontSize: "12px",
            color: "#0BB07E",
            backgroundColor: "#F0FAf7",
            width: "fit-content",
            padding: 1,
            marginX: 2,
            borderRadius: 2,
            marginBottom: 3
          }}
        >
          18% OFF
        </Typography>

        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Color
        </Typography>

        {/* Color Selection Buttons */}
        <Box sx={{ display: 'flex' }}>
          {['silver', 'black'].map((color) => (
            <Button 
              key={color}
              variant="outlined"
              sx={{
                width: "5rem",
                height: "5.5rem",
                fontSize: "10px",
                marginRight: 2,
                display: "flex",
                flexDirection: "column",
                textTransform: "lowercase"
              }}
            >
              <Box sx={{ width: "80%", backgroundColor: color, height: "100%" , borderRadius:1,marginBottom:1}} />
              <Box>{color}</Box>
            </Button>
          ))}
        </Box>

        <Typography sx={{ paddingY: 2 }}>size</Typography>

        <Typography 
          variant="outlined"
          sx={{
            fontSize: "12px",
            textDecoration: "line-through",
            color: "#48afff",
            border: "1px solid #48afff",
            padding: 1,
            borderRadius: 1
          }}
        >
          55 INCh
        </Typography> 

        <Button 
          sx={{
            marginY: 4,
            width: { xs: "80%", md: "40%" },
            backgroundColor: "#48afff",
            color: "white",
            display: "block",
            marginX: "auto",
            textTransform: "lowercase",
            display:{xs:"none", md:"block"}
          }}
        >
          Compare
        </Button>
      </Box>
    </Grid>
  );
};

export default TvComp;
