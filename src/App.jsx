import { Header } from "./features/Header";
import { ProductProvider } from "./contexts/ProductProvider";
import { Footer } from "./features/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProductsPage } from "./features/CartProductsPage";
import { HomePageProducts } from "./features/HomePageProducts";
import { NotFoundPage } from "./features/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePageProducts />} />
            <Route path="/cart" element={<CartProductsPage />} />
            <Route path="/products" element={<NotFoundPage />}/>
            <Route path="/sale" element={<NotFoundPage />}/>
            <Route path="/checkout" element={<NotFoundPage />}/>
          </Routes>
        </ProductProvider>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
