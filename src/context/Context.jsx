import React, { createContext, useReducer } from "react";
import App from "../App";
import { faker } from "@faker-js/faker";
import { cartReaducer } from "./Reducers";
import { useContext } from "react";
const Cart = createContext();
const Context = ({ Childern }) => {
  const Products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.cats(),
    fastDelivery: faker.datatype.boolean(),
    inStock: Math.floor(Math.random() * 12 + 1),
    ratings: Math.floor(Math.random() * 5 + 1),
  }));
  const [state, dispatch] = useReducer(cartReaducer, {
    products: Products,
    carts: [],
  });
  return (
    <Cart.Provider value={{ state, dispatch }}>
      <App />
    </Cart.Provider>
  );
};
export const Cartstate = () => {
  return useContext(Cart)
};

export default Context;
