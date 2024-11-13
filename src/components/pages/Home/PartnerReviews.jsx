import React from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ratings = [
  {
    name: "Trustpilot",
    rating: "⭐⭐⭐⭐⭐",
    score: "4.8/5",
    reviews: "1,237",
    color: "green",
  },
  {
    name: "Google",
    rating: "⭐⭐⭐⭐⭐",
    score: "4.8/5",
    reviews: "1,237",
    color: "blue",
  },
  {
    name: "Hostadvice",
    rating: "⭐⭐⭐⭐⭐",
    score: "4.8/5",
    reviews: "1,237",
    color: "orange",
  },
  {
    name: "WPBeginner",
    rating: "⭐⭐⭐⭐⭐",
    score: "4.8/5",
    reviews: "1,237",
    color: "purple",
  },
];

const PartnerReviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Recommended by <b>WordPress.org</b>
      </Typography>

      {/* Desktop View */}
      {!isMobile && (
        <Grid container spacing={4} justifyContent="center">
          {ratings.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                //   borderTop: `5px solid ${item.color}`,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1 }}
                    color={`${item.color}.main`}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h6">{item.rating}</Typography>
                  <Typography variant="body1">
                    Rating: <b>{item.score}</b> | {item.reviews} reviews
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Mobile View - Carousel */}
      {isMobile && (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
        >
          {ratings.map((item, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                // borderTop: `5px solid ${item.color}`,
                mx: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1 }}
                color={`${item.color}.main`}
              >
                {item.name}
              </Typography>
              <Typography variant="h6">{item.rating}</Typography>
              <Typography variant="body1">
                Rating: <b>{item.score}</b> | {item.reviews} reviews
              </Typography>
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default PartnerReviews;
