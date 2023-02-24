import { Link } from "react-router-dom";
import "./Style.css";

function Login() {
  return (
    <div className="form">
      <h1>Login To App</h1>
      <form>
        <div className="container">
          <label>Email*</label><br></br>
          <input type="text" name="email" placeholder="Email"></input>
        </div>
        <div className="container">
          <label>Password*</label><br></br>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div style={{marginTop:"30px"}}><span style={{textAlign:"left" ,margin:"20px"}} >
        <input type="checkbox" name="Remember Me" />
        <label>Remember Me</label>
        </span>
        <Link>ForgotPassword</Link>
        </div>
        <div>

        </div>
        
        <div className="container">
          <button>Login </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
