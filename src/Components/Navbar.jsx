import React from "react";
import "./Style.css"
import { Link } from "react-router-dom";
function Navbar() {
    return ( <div className="Navbar">
        <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/Browse">Browse</Link></li>
        <li><Link to="/Help">Help</Link></li>
        <li><Link to="/WhitePaper">White Paper</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Jobs">Jobs</Link></li>
        <li><Link to="Login">Login</Link></li>
       
        </ul>
        </div> );
}

export default Navbar;