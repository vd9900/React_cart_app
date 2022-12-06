import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { Cartstate } from "../context/Context";
import Rating from "./rating";

const Post = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = Cartstate();
  console.log(cart);
  return (
    <div className="products">
      <Card>
        <CardImg variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>${product.price}</span>
          </Card.Subtitle>
          {product.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>2 days Delivery</div>
          )}
          <div>
            <Rating rating={product.ratings} />
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
              style={{ marginRight: 10 }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
