import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  //console.log(data);
  return (
    <div>
      <div className="row">
        {data.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
              <Link to={`/product-detail/${p.id}`}>
                <img src={p.thumbnail} alt="" />
              </Link>
              <div className="content">
                <Link to={`/product-detail/${p.id}`}>
                  <h2>{p.title}</h2>
                </Link>
                <p>Gia: {p.price}</p>
                <button className="btn btn-primary">Xem chi tiet</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
