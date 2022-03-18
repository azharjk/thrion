import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import mensWearImage from "../data/menswears/1.jpg";

import { Wear } from "../interfaces";
import { login } from "../store";

import ProductCard from "../components/ProductCard";

const WomenWear = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  });

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
      <h1 className="recommend__title">Women's Wear</h1>
      <div className="recommend__content">
        {flashSaleItems.map((item, index) => (
          <ProductCard key={index} wear={item} />
        ))}
      </div>
    </section>
  );
};

export default WomenWear;
