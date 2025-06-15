import { useCart } from "../context/CartContext";

function Cartpage() {
  const { cart, removeFromCart, decreaseQuantity, total } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded shadow flex gap-4 items-center bg-white"
              >

                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name || item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                
                <div className="space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <div className="text-right mt-6">
            <button
              className="bg-emerald-400 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => alert("Checkout coming soon!")}
            >
              Proceed to Checkout
            </button>
        </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
