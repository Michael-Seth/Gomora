import React from "react";
import Banner from "../components/Banner";
import CategoriesDisplay from "../components/CategoriesDisplay";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div>
      
      <Header />
      <Banner />
      <Features />
      <CategoriesDisplay />
      <ProductsList />
    </div>
  );
}

export default Home;
