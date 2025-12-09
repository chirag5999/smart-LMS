import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-5 py-5" style={{ backgroundColor: "#2e2e2e" }}>
      <div className="container text-white">

        <div className="row text-center text-md-start">

          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white">Smart LMS</h5>
            <p className="small text-white">
              A modern learning platform designed to enhance your skills and boost your career.
            </p>

            {/* Social Media Icons */}
            <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-4 text-decoration-none">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-4 text-decoration-none">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-4 text-decoration-none">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white fs-4 text-decoration-none">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-white text-decoration-none" to="/">Home</Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="/courses">Courses</Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="/login">Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white">Contact</h6>
            <p className="small text-white mb-1">Email: support@smartlms.com</p>
            <p className="small text-white mb-1">Phone: +91 9876543210</p>
            <p className="small text-white">Location: India</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-3 border-top border-secondary small text-white">
          © {new Date().getFullYear()} Smart LMS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
