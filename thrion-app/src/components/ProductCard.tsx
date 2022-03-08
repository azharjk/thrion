import React from "react";

import "./ProductCard.css";

import { Wear } from "../interfaces";

interface ProductCardProps {
  wear: Wear;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ wear }) => {
  return (
    <div>
      <div className="card__content">
        <img className="card__image" src={wear.image} alt="Product" />
        <p className="card__title">{wear.title}</p>
        <a className="card__link" href="#">
          See details
        </a>
      </div>
      <div className="card__price">
        <p className="card__price__text">xxxxxxxxxx</p>
      </div>
    </div>
  );
};

export default ProductCard;
