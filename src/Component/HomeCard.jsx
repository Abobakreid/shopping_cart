import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddMore from "./AddMore";
import { useStoreContext } from "../Context/StoreContext";
const HomeCard = ({ id, name, price, ImageUrl, quantity }) => {
  const {
    cardItems,
    AddMoreQuantity,
    AddToCart,
    decreaseQuantity,
    RemoveMoreQuantity,
  } = useStoreContext();
  const findEL = cardItems.find((el) => el?.id === id);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: "100%", paddingY: "20px" }}>
        <CardMedia sx={{ height: 140 }} image={ImageUrl} title="green iguana" />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="p" color="text.secondary">
            $ {price}
          </Typography>
        </CardContent>
        {findEL?.quantity >= 0 && (
          <AddMore
            id={id}
            quantity={findEL?.quantity}
            AddMoreQuantity={AddMoreQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        )}
        <CardActions sx={{ justifyContent: "center" }}>
          {findEL?.quantity}
          {(findEL?.quantity <= -1 || findEL?.quantity === undefined) && (
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                AddToCart({ id, name, price, ImageUrl, quantity });
              }}
            >
              Add To Cart
            </Button>
          )}
          {findEL?.quantity >= 0 && (
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "red" }}
              onClick={() => {
                RemoveMoreQuantity(id);
              }}
            >
              Remove
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HomeCard;
