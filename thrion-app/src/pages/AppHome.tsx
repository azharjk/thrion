import React from "react";

import mensWearImage from "../data/menswears/1.jpg";
import "./AppHome.css";

import { Wear } from "../interfaces";

import ProductCard from "../components/ProductCard";

const AppHome = () => {
  // NOTE: Dummy data
  const mensWears: Wear[] = [
    {
      image: mensWearImage,
      title: "Gucci T-Shirt (Unisex)",
    },
    {
      image: mensWearImage,
      title: "Gucci's sweater",
    },
    {
      image: mensWearImage,
      title: "Supreme T-Shirt",
    },
    {
      image: mensWearImage,
      title: "Officer Satin Bomber",
    },
  ];

  const womensWears: Wear[] = [
    {
      image: mensWearImage,
      title: "Baju",
    },
    {
      image: mensWearImage,
      title: "Celana",
    },
    {
      image: mensWearImage,
      title: "Cangcut",
    },
    {
      image: mensWearImage,
      title: "Kutang",
    },
  ];

  const newcomersWears: Wear[] = [
    {
      image: mensWearImage,
      title: "Baju",
    },
    {
      image: mensWearImage,
      title: "Celana",
    },
    {
      image: mensWearImage,
      title: "Cangcut",
    },
    {
      image: mensWearImage,
      title: "Kutang",
    },
    {
      image: mensWearImage,
      title: "Baju",
    },
    {
      image: mensWearImage,
      title: "Celana",
    },
    {
      image: mensWearImage,
      title: "Cangcut",
    },
    {
      image: mensWearImage,
      title: "Kutang",
    },
  ];

  return (
    <>
      <section className="recommend">
        <h1 className="recommend__title">Men's Wear</h1>
        <div className="recommend__content">
          {mensWears.map((wear, index) => (
            <ProductCard key={index} wear={wear} />
          ))}
        </div>
      </section>
      <section className="recommend">
        <h1 className="recommend__title">Women's Wear</h1>
        <div className="recommend__content">
          {womensWears.map((wear, index) => (
            <ProductCard key={index} wear={wear} />
          ))}
        </div>
      </section>
      <section className="recommend">
        <h1 className="recommend__title">Newcomers</h1>
        <div className="recommend__content">
          {newcomersWears.map((wear, index) => (
            <ProductCard key={index} wear={wear} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AppHome;
