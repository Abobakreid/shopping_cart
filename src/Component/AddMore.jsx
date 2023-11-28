import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const AddMore = ({ id, quantity, AddMoreQuantity, decreaseQuantity }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        onClick={() => {
          decreaseQuantity(id);
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
        <Typography sx={{ mr: "5px" }}>{quantity}</Typography>
        <Typography variant="h6">in cart</Typography>
      </Box>
      <IconButton
        onClick={() => {
          AddMoreQuantity(id);
        }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default AddMore;
