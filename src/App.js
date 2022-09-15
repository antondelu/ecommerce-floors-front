import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/Pe-icon-7-stroke.css";
import "./assets/css/plugins.min.css";
import "./assets/css/swiper-bundle.min.css";
import { Footer } from "./components/footer/Footer";
import { NavbarPrincipal } from "./components/navbar/NavbarPrincipal";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ProductDetail } from "./components/productDetail/ProductDetail";
import { Error404 } from "./components/error404/Error404";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Products } from "./components/products/Products";
import { Admin } from "./components/administrator/Admin";
import { ContactUs } from "./components/contactUs/ContactUs";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { MyAccount } from "./components/navbar/MyAccount";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes.jsx";
import { CheckoutPage } from "./components/checkout/CheckoutPage";
import { OrderComplete } from "./components/orderComplete/OrderComplete";

function App() {
  return (
    <div className="app">
      <NavbarPrincipal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<MyAccount />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<OrderComplete />} />
        </Route>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
