import React, { createContext, useContext, useState } from "react";

const StoreItemContext = createContext();
const StoreContext = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);
  const AddToCart = (item) => {
    setCardItems([...cardItems, { ...item, quantity: item.quantity + 1 }]);
  };

  const AddMoreQuantity = (item) => {
    setCardItems((cardItems) => {
      return cardItems.map((cardItem) => {
        if (cardItem?.id === item) {
          return { ...cardItem, quantity: cardItem?.quantity + 1 };
        } else {
          return cardItem;
        }
      });
    });
  };
  
  const decreaseQuantity = (item) => {
    setCardItems((cardItems) => {
      return cardItems.map((cardItem) => {
        if (cardItem?.id === item) {
          if (cardItem?.quantity === 0) {
            cardItems?.shift(cardItem);
          } else {
            return { ...cardItem, quantity: cardItem?.quantity - 1 };
          }
        } else {
          return cardItem;
        }
      });
    });
  };

  const RemoveMoreQuantity = (id) => {
    const findEl = cardItems.filter((itm) => itm.id !== id);
    setCardItems([...findEl]);
  };
  return (
    <StoreItemContext.Provider
      value={{
        cardItems,
        AddToCart,
        AddMoreQuantity,
        RemoveMoreQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </StoreItemContext.Provider>
  );
};

export default StoreContext;

export const useStoreContext = () => {
  return useContext(StoreItemContext);
};
