import { useEffect, useState } from "react";
import Card from "../components/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Failed to load products");
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-20 p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <p className="mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, culpa
        quaerat fugiat sint neque nobis tempora consectetur ratione error
        laboriosam aspernatur reprehenderit. Dolorum nulla omnis numquam ex
        magni minima eius molestiae sunt temporibus! Aliquam saepe excepturi
        ducimus modi itaque. Consequuntur ipsum necessitatibus dicta facere
        sequi, dolores nesciunt eos voluptates odio, tenetur in sint provident
        molestiae, debitis pariatur mollitia. Deserunt sapiente quas fuga nam in
        perspiciatis quis error earum qui eius fugiat accusamus vel laboriosam
        consequuntur neque iure ipsam, odio repellat, ea veritatis. Illum
        distinctio eveniet placeat maiores vitae nam, reprehenderit magnam
        reiciendis, nihil atque iusto facere unde ex ipsum? Minima.
      </p>
      {loading && <p className="mb-4">Loading products...</p>}
      {error && <p className="mb-4 text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="w-full" style={{}}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
