import { useTheme } from "../context/ThemeContext";

const Card = ({ product }: { product: any }) => {
  const { theme } = useTheme();
  const extraClass =
    theme === "theme3"
      ? "transform hover:scale-105 transition-transform duration-300"
      : "";
  return (
    <div
      className={`rounded shadow p-4 transition-all duration-300 bg-[var(--card-bg)] text-[var(--card-text)] font-(family-name:--font) ${extraClass}`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-32 w-full object-contain mb-2"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm">${product.price}</p>
    </div>
  );
};

export default Card;
