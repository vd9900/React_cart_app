import React from "react";
import { Cartstate } from "../context/Context";
import Post from "../components/post";
import '../styles/style.css'
import FC from '../components/Fc'

const Home = () => {
  const {
    state: { products },
  } = Cartstate();
  return (
    <div className="home">
      <FC/>
      <div className="product">
        {products.map((product) => {
          return <Post product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
