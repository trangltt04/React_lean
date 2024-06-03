import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../axios/index";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    })();
  }, []);
  return (
    <div>
      <h1>Chi tiet san pham</h1>
      <div className="row">
        <div className="col-6">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="col-6">
          <h2>{product.title}</h2>
          <p>Price{product.price}</p>
          <p>Mo ta: {product.description}</p>
          <button className="btn btn-danger">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
