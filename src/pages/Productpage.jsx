import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Productpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        const found = data.find((item) => item.id === parseInt(id));
        if (found) {
          setProduct(found);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setNotFound(true);
      }
    }

    getProduct();
  }, [id]);

  if (notFound) return <h2>Product not found.</h2>;
  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold text-lg mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Productpage;
