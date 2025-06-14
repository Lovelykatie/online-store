import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [addedProductId, setAddedProductId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/src/data/products.json");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  function handleAddToCart(product) {
    addToCart(product);
    setAddedProductId(product.id);

    setTimeout(() => setAddedProductId(null), 2000);
  }

  return (
    <div className="bg-gray-200 min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Jewelry Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
            <p className="font-bold mb-3">${product.price}</p>

            <button
              onClick={() => handleAddToCart(product)}
              className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-600 w-full mb-2"
            >
              Add to Cart
            </button>

            {addedProductId === product.id && (
              <p className="text-green-700 text-sm text-center mb-2">✔ Added to cart!</p>
            )}

            <Link
              to={`/product/${product.id}`}
              className="block text-center text-blue-600 hover:underline mb-1"
            >
              View Product
            </Link>
            <Link
              to="/cart"
              className="block text-center text-gray-700 hover:underline"
            >
              Go to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
