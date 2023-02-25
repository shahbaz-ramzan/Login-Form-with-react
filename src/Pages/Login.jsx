import { Link } from "react-router-dom";
import "./Style.css";
import { useEffect, useState } from "react";

function Login() {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Email:",email);
    console.log("password:",password);


  }
  useEffect




  return (
    <div className="form">
      <h1>Login To App</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Email*</label>
          <br></br>
          <input type="text" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="container">
          <label>Password*</label>
          <br></br>
          <input type="password"  placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div style={{ marginTop: "30px" }}>
          <span style={{ textAlign: "left", margin: "20px" }}>
            <input type="checkbox" name="Remember Me" />
            <label>Remember Me</label>
          </span>
          <Link to="#">ForgotPassword</Link>
        </div>
        <div></div>

        <div className="container">
          <button>Login </button>
        </div>
        <br></br>
        <p>Or</p>
        <br></br>
        <div>
          <button>Request One Time Verification Code</button>
        </div>
        <br></br>
        <p>Login with social accounts</p>
      </form>
    </div>
  );
}

export default Login;
