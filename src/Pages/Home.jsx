import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HomeCard from "../Component/HomeCard";
import storItemData from "../Data/StoreItem.json";
const Home = () => {
  return (
    <Box sx={{ padding: "50px" }}>
      <Typography
        variant="h3"
        component={"h3"}
        sx={{ fontWeight: "bold", my: "20px;" }}
      >
        {" "}
        Store
      </Typography>
      <Grid container spacing={2}>
        {storItemData?.map((item) => {
          return <HomeCard key={item.id} {...item} />;
        })}
      </Grid>
    </Box>
  );
};

export default Home;
