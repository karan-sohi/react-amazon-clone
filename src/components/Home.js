import DUMMYDATA from "./data";
import ProductItem from "./ProductItem";
import "./Home.css";
import homePagePic from "../images/homePage.jpg";
import { useState } from "react";

const Home = () => {
  const [productsData, setProductsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const fetchProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    if (!response.ok) {
        throw new Error('unable to fetch');
    }
    setProductsData(responseData)
  };
  fetchProductsData().then(() => {
    setIsLoading(false);
  }).catch(err => {
    console.log(err)
  });

  if (isLoading) {
    return <h1>The data is still loading</h1>
  }
  return (
    <section className="homePage">
      <img className="homePic" src={homePagePic}></img>
      {console.log(productsData)}
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </section>
  );
};

export default Home;
