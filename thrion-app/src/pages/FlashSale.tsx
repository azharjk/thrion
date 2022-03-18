import React from "react";

import mensWearImage from "../data/menswears/1.jpg";

import { Wear } from "../interfaces";

import ProductCard from "../components/ProductCard";

const FlashSale = () => {
  const flashSaleItems: Wear[] = [
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

  return (
    <section className="recommend">
      <h1 className="recommend__title">Flash Sale</h1>
      <div className="recommend__content">
        {flashSaleItems.map((item, index) => (
          <ProductCard key={index} wear={item} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
