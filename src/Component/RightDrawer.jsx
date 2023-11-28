import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DrawerCard from "./DrawerCard";
import { useStoreContext } from "../Context/StoreContext";

const RightDrawer = ({ state, setOpenDrawer }) => {
  const { cardItems, RemoveMoreQuantity } = useStoreContext();
  return (
    <Drawer
      anchor={"right"}
      open={state}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <Box
        role="presentation"
        onClick={() => {
          setOpenDrawer(false);
        }}
        sx={{
          width: 350,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "10px",
        }}
      >
        <Typography variant="h6">Cart</Typography>
        <IconButton
          onClick={() => {
            setOpenDrawer(false);
          }}
        >
          <CloseIcon></CloseIcon>
        </IconButton>
      </Box>
      <Divider />
      {cardItems?.map((item) => (
        <DrawerCard
          key={item?.id || Math.random() * 100}
          item={item}
          RemoveMoreQuantity={RemoveMoreQuantity}
        />
      ))}

      {cardItems?.length > 0 && (
        <Typography variant="h6" sx={{ textAlign: "right", pr: 1 }}>
          Total :
          {cardItems?.reduce(
            (acc, item) =>
              Number(acc) + Number(item?.price) * Number(item?.quantity),
            0
          )}
        </Typography>
      )}
    </Drawer>
  );
};

export default RightDrawer;
