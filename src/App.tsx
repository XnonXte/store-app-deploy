/* Copyright 2023 XnonXte. */

/*
Notes:
  - This project uses Bootstrap (via CDN) and React using vite.
  - This project has been deployed to GitHub Pages on https://xnonxte.github.io/store-app-deploy/
  - This project is created in under 2 hours?
  - Possible extension to this project including, but not limited to:
    1. Add a rating system.
    2. Create a more robust card system.
    3. Create a customized bootstrap SCSS.
    4. Add a landing page?
    5. Add a user page (including user auth of course).
*/

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
