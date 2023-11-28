import { Close } from "@mui/icons-material";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
const DrawerCard = ({ item, RemoveMoreQuantity }) => {
  return (
    <Paper elevation={2} sx={{ mt: 1 }}>
      <Grid
        container
        spacing={1}
        maxWidth={"100%"}
        sx={{ alignItems: "center" }}
      >
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <img
            style={{ display: "inline-block", width: "100px" }}
            alt="complex"
            src={item?.ImageUrl}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="div" color="initial">
            {item?.name}{" "}
            <Typography variant="span" sx={{ color: "#AAA", fontSize: "12px" }}>
              {item?.quantity}x
            </Typography>
            <Typography variant="p" component={"p"}>
              {item?.price}
            </Typography>
          </Typography>
          <Typography variant="span" color="initial">
            {Number(item?.price) * Number(item?.quantity)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <IconButton
            edge={"end"}
            onClick={() => {
              RemoveMoreQuantity(item?.id);
            }}
          >
            <Close></Close>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DrawerCard;
