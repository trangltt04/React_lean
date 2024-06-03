import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import api from "./axios/index";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Admin/Dashboard";
import ProductAdd from "./pages/Admin/ProductAdd";
import Footer from "./componest/Footer";
import Header from "./componest/Header";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/products");
      setProducts(data);
    })();
  }, []);

  const handleSubmit = (data) => {
    //console.log(data);
    (async () => {
      try {
        const res = await api.post("/products", data);
        setProducts([...products, res.data]);
        if (confirm("Add succefully, redirect to admin page?")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home data={products} />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Dashboard data={products} />} />
          <Route
            path="/admin/product-add"
            element={<ProductAdd onAdd={handleSubmit} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
