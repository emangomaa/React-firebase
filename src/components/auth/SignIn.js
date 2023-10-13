import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEnvelope } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
export default function SignIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      alert("sign in");
      navigate("/homePage");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      LogIn
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={signIn}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaEnvelope className="mx-3 fs-4" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <BiSolidLockAlt className="mx-3 fs-3" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-50 mx-auto"
                        >
                          LogIn
                        </button>
                        <p className="text-center text-muted mt-5 mb-0">
                          Don't have an account?{" "}
                          <Link to="/" className="fw-bold text-body">
                            <u>Register here</u>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
