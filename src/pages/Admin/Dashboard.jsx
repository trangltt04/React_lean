import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  return (
    <div>
      <h1>Hello Admin</h1>
      <Link to="/admin/product-add" className="btn btn-success">
        Add new product
      </Link>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt={p.title} />
                ) : (
                  "Updating"
                )}
              </td>
              <td>{p.price}</td>
              <td>{p.description}</td>
              <button className="btn btn-outline-success">Suwa</button>
              <button className="btn btn-danger">Xoa</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
