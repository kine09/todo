import React from "react";
import loginImg from "./login-img/login.png";
import loginCss from "./login.css";
import { useState, UseEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/login";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const auth = useSelector((store) => store.login);

  function handelFrom(e) {
    e.preventDefault();
    const params = { email, password };
    dispatch(login(params));
  }

  return (
    <div id="modal">
      <div className="warper">
        <header className="warper-header">
          <img
            alt="anh"
            src={loginImg}
            style={{ height: "20px", width: "20px", objectFit: "cover" }}
          />
          <p
            style={{
              fontSize: "2.5rem",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            login
          </p>
        </header>
        <main className="warper-main">
          <form className="warper-form" onSubmit={handelFrom}>
            <div className="warper-subject">
              <label>User Name</label>
              <br />
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
                placeholder="Enter you user name"
                value={email}
              />
            </div>

            <div className="warper-subject">
              <label>PassWord</label>
              <br />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter you Password"
                value={password}
              />
            </div>
            <button>Login</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
