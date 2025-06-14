import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Cartpage from "./pages/Cartpage";
import ScreenshotButton from "./components/screenshotbutton";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-200 p-4">
          <Header />
          <ScreenshotButton />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<Productpage />} />
            <Route path="/cart" element={<Cartpage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
