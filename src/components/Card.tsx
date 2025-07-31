import React from "react";
import { useTheme } from "../context/ThemeContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme();
  const extraClass =
    theme === "theme3"
      ? "transform hover:scale-105 transition-transform duration-300"
      : "";

  return (
    <div
      className={`rounded shadow p-4 transition-all duration-300 bg-[var(--card-bg)] text-[var(--card-text)] font-[var(--font)] ${extraClass}`}
    >
      <div className="flex justify-center mb-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 object-contain"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <h3 className="font-bold text-lg">{product.title}</h3>
      {product.category && (
        <p className="text-sm mb-1 capitalize">{product.category}</p>
      )}
      <p className="font-semibold">${product.price}</p>
    </div>
  );
};

export default Card;
