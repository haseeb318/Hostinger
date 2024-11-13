import React from 'react';
import { Box, Typography, Button, Grid, List, ListItem, Grid2 } from '@mui/material';
// import { grey, red } from '@mui/material/colors';

const HeaderContainer = () => {
  return (
    <Box 
      sx={{
        padding: { xs: 4, md: 4 }, 
        flexDirection: { xs: 'column', md: 'row' }, 
        display: 'flex', 
        alignItems: 'center'
      }}
    >
      {/* Left Side */}
      <Grid item xs={12} md={6}>
        <Box sx={{ py: { xs: 2, md: 4 },
        px:{xs:1,md:4}
       }}>
          <Typography 
            variant="h1" 
            sx={{
              color: '#2F1C64', 
              fontSize: { xs: '1.3rem', md: '3rem' }, 
              fontWeight: 600, 
              paddingBottom: 1,
              lineHeight: 1.2,
              textAlign:{xs:'center',md:"left"},
              // paddingY:4
            }}
          >
            Biggest ever
            <span style={{ fontWeight: 700, color: '#673de6', paddingLeft: 8,  paddingRight:8}}>
              Blessed Friday
            </span> 
            Sale
          </Typography>

          <Typography 
            sx={{ 
              color: '#2F1C64', 
              fontWeight: 'bold', 
              fontSize: { xs: '1rem', md: '1.5rem' }, 
              marginTop: 1 ,
              textAlign:{xs:'center',md:'left'},
             textWrap:'nowrap'

            }}
          >
            Up to 
            <span style={{ color: '#673de6' }}> 75% </span>
            off hosting + website builder
          </Typography>
          <List
           sx={{
    paddingY: { xs: 2, md: 1 },
    textAlign: { xs: "center", md: "left" },
    width: "100%",
    color: "#2F1C64",
  }}
>
  {["Free domain", "Free website migration", "24/7 customer support"].map((item, index) => (
    <ListItem
      key={index}
      sx={{
        justifyContent: {xs:"center",md:"flex-start"}, 
        paddingY: 0, 
        paddingX: 0,
      }}
    >
      <Typography
        component="span"
        sx={{ color: "green", marginRight: 1 }}
      >
        ✔
      </Typography>
      {item}
    </ListItem>
  ))}
</List>


          <Typography sx={{ paddingY: {xs:0,md:1},
          textAlign:{xs:'center',md:"left"},
           fontSize: {  xs: '1.5rem', md: '2rem' } }}>
            Rs <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>529</span>/mo
          </Typography>
          <Typography 
            sx={{ 
              color: '#2F1C64', 
              fontWeight:'900', 
              fontSize: { xs: '0.9rem', md: '1rem' } ,
              textAlign:{xs:'center',md:"left"},
            }}
          >
            +3 months free
          </Typography>

          <Grid sx={{ display: 'flex', alignItems:'baseline', paddingTop: 3, 
          flexDirection:{xs:'column-reverse', sm:"row"},
        
          }}>
            <Button 
              variant="contained"
              sx={{
                backgroundColor: '#673de6',
                borderColor: '#673de6',
                width:{xs:"90%",
                  md:"40%"
                },
                marginY:{xs:2},
                color: 'white',
                paddingX: 5,
                paddingY: 1,
                borderRadius: 2,
                '&:hover': { backgroundColor: '#572bce' }
              }}
            >
              Claim Deal
            </Button>

            <Button 
              variant="outlined"
              sx={{
                marginLeft: 3,
                borderColor: '#2F1C64',
                color: '#2F1C64',
                width:{xs:"90%",
                  md:"40%"
                },
                paddingX: 5,
                paddingY: 1,
                borderRadius: 2,
                fontWeight: 'bold'
              }}
            >
              00 : 00 : 00 : 00
            </Button>
          </Grid>

          <Typography sx={{ textAlign:{xs:"center",md:"left"},fontSize: '0.9rem', paddingBottom: 1 }}>
            30-day money-back guarantee
          </Typography>
        </Box>
      </Grid>


      {/* Right Side */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box component="img" 
          src="/images/74%off.png"
          alt="74% Off"
          sx={{ width: { xs: '100%', md: '100%' }, height: 'auto' }}
        />
      </Grid>
    </Box>
  );
};

export default HeaderContainer;
