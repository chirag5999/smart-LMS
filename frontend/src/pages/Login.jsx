import { useState } from "react";
import illustration from "../assets/illustration.svg";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted", form);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">

        {/* LEFT SIDE ILLUSTRATION */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src={illustration}
            alt="illustration"
            className="img-fluid"
            style={{ maxWidth: "80%", borderRadius: "12px" }}
          />
        </div>

        {/* RIGHT SIDE LOGIN FORM */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px" }}>
            <div className="card-body">
              <h3 className="text-center mb-4 text-primary">Smart LMS Login</h3>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="text-decoration-none small text-primary">
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>

              {/* Signup Link */}
              <p className="text-center mt-4 mb-0">
                Don’t have an account?{" "}
                <a href="/register" className="text-decoration-none text-primary fw-semibold">
                  Sign Up
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
