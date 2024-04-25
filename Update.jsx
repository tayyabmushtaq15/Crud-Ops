import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6629f60e67df268010a21849.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center rounded">
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="form-grop">
              <label htmlFor="">Enter your name:</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-grop">
              <label htmlFor="">Enter your age:</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-grop">
              <label htmlFor="">Enter your email:</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Update;
