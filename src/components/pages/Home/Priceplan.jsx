import React from 'react'
import { Box,Card,CardContent,Grid2,Typography,Button } from '@mui/material'

const Priceplan = () => {
  return (
   <Box sx={{display:"flex", flexDirection:"column"}}>
    {/* heading of price plan */}
    <Grid2>
        <Typography  sx={{
        textAlign:"center",
        fontSize:{md:"2rem" ,xs:"1.0rem"}, 
        fontWeight:"bold", 
        color: '#2F1C64', 
        paddingX:6,
         paddingTop:5,
        }}>Pick your perfect plan</Typography>
        <Typography variant='body2' sx={{textAlign:"center" 
            ,paddingY:2 ,color: '#2F1C64',
            fontSize:"1rem"
            }}>
             Get started in complete confidence.
             Our 30-day money-back guarantee means it's risk-free.
        </Typography>
    </Grid2>

    {/* price pla div */}
    <Grid2 container spacing={4} justifyContent="center">
        <Card sx={{
            width:"20%",
            height:"1023px",
            background:"#FAFBFF",
            border : "2px solid #dee5fc",
            borderRadius:3,
            paddingY:4,
            paddingX:2,
            color: '#2F1C64'
            }}> 
            
           <CardContent>
            <Typography variant='h6' sx={{fontWeight:"bold", paddingBottom:1}}>
                Single
            </Typography >
            <Typography variant='body2' sx={{paddingBottom:4}}>
            Ideal solution for beginners.
            </Typography>
            <Typography variant='body2' sx={{textDecoration:"line-through", color:"gray"}}>
            Rs.1,390
            </Typography>


            <Typography sx={{ paddingY: {xs:0,md:1},
             textAlign:{xs:'center',md:"left"},
             fontSize: {  xs: '1.5rem', md: '1rem'},
            //  paddingBottom:6 
            
             
             }}>
            Rs <span style={{ fontSize: '3rem', fontWeight: 'bold',  }}>290</span>/mo
            </Typography>

          <Button 
              variant="outlined"
              sx={{
                borderColor: '#673de6',
                color: '#673de6',
                width: "100%",
                paddingX: 5,
                paddingY: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                textTransform:"capitalize",
                marginTop:4,
                marginBottom:2,
                border:2,
              }}
            >
               Choose  Plan
            </Button>
        <Typography sx={{
            fontSize:"14px",
            marginBottom:4,
            color:"gray"
        }}>
               Rs.690/mo when you renew
        </Typography>
         <hr />
           </CardContent>
        </Card>




        <Card sx={{width:"20%"}}> 
           <CardContent>
            <Typography>
                Single
            </Typography>
           </CardContent>
        </Card>

        <Card sx={{width:"20%"}}> 
           <CardContent>
            <Typography>
                Single
            </Typography>
           </CardContent>
        </Card>

        <Card  sx={{width:"20%"}}> 
           <CardContent>
            <Typography>
                Single
            </Typography>
           </CardContent>
        </Card>
    </Grid2>

   </Box>
  )
}

export default Priceplan