import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Browse">Browse</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/whitePaper">White Paper</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
        <Link to="fetch">Fetch</Link>
      </li>
      <li>
      <Link to="axios">Axios</Link>
    </li>
      </ul>
    </div>
  );
}

export default Navbar;
