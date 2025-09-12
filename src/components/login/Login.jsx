import React, { useState } from "react";
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

   const togglePasswordVisibility = () => {
     setShowPassword((prev) => !prev);
   };

  return (
    <div className="">
      <div className="bg-color mb-5 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="container">
          <div className="row p-5 d-flex align-items-center">
            <div className="col-6 ps-5">
              <h1 className="text-primary">
                <b className="fs-l">facebook</b>
              </h1>
              <p className="fw-4 fs-2">
                Facebook helps you connect and share with the people in your
                life.
              </p>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column align-items-center">
                <div className="form-width card shadow border p-3">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email address or phone number"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-control mb-3 d-flex justify-content-between align-items-center">
                      <input
                        className="pas-in-w"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i
                        className={`bi ${
                          showPassword ? "bi-eye" : "bi-eye-slash"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                    <button
                      className="form-control btn btn-primary mb-3"
                      type="submit"
                    >
                      Log In
                    </button>
                    <p className="text-primary text-center mb-3">
                      Forgotten password?
                    </p>
                    <hr />
                    <div className="text-center mb-2">
                      <button className="btn-color">
                        <b>Create new account</b>
                      </button>
                    </div>
                  </form>
                </div>
                <p className="mt-3">
                  <b>Create a Pag </b>for a celebrity, brand or business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-5 px-5">
          <div className="col-12">
            <div className="language d-flex gap-3 fs-s border-bottom">
              <p>English (UK)</p>
              <p>தமிழ்</p>
              <p>తెలుగు</p>
              <p>ಕನ್ನಡ</p>
              <p>اردو</p>
              <p>हिन्दी</p>
              <p>മലയാളം</p>
              <p>සිංහල</p>
              <p>ਪੰਜਾਬੀ</p>
              <p>বাংলা</p>
              <p>ગુજરાતી</p>
              <p className="btn-add">+</p>
            </div>
            <div className="language d-flex gap-3 fs-s mt-2">
              <p>Sign Up</p>
              <p> Log in</p>
              <p>Messenger</p>
              <p>Facebook Lite</p>
              <p>Video</p>
              <p> Meta Pay</p>
              <p> Meta Store</p>
              <p> Meta Quest</p>
              <p>Ray-Ban Meta</p>
              <p> Meta AI</p>
              <p>Meta AI more content</p>
              <p>Instagram</p>
            </div>
            <div className="language d-flex gap-3 fs-s">
              <p>Threads</p>
              <p>Voting Information Centre</p>
              <p>Privacy Policy</p>
              <p>Privacy Centre</p>
              <p>Help</p>
              <p>Contact uploading and non-users</p>
            </div>
            <div className="language d-flex gap-3 fs-s">
              <p>Meta © 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
