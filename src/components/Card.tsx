const Card = ({ product }: { product: any }) => {
  return (
    <div className="rounded shadow p-4 transition-all duration-300 bg-[var(--bg)] text-[var(--text)] font-[var(--font)]">
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
