import { useEffect, useState } from "react";
import StoreList from "./components/StoreList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const App = () => {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(() => data.products))
      .catch((err) => console.error(`Error fetching data: ${err.message}`));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <StoreList products={products} />
      <Footer />
    </>
  );
};

export default App;
