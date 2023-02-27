import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Testimonial from "../components/Testimonial";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Product from "../components/Product";

function Home() {
  return (
    <div>
      <Header />
      <ProductsList />
      <Testimonial />
      <Modal />
      <Banner />
    </div>
  );
}

export default Home;
