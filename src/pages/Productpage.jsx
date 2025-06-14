import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function getProduct() {
      const res = await fetch("/src/data/products.json");
      const data = await res.json();
      const found = data.find((item) => item.id === parseInt(id));
      setProduct(found);
    }

    getProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="max-w-xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
      <br />
      <Link to="/cart" className="mt-2 text-blue-600 inline-block">Go to Cart</Link>
    </div>
  );
}

export default Productpage;
