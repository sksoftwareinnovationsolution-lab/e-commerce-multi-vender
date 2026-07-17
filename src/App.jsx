import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;