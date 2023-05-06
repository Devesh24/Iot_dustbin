import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
      const data = await axios.post(`https://api-test4-production.up.railway.app/api/login/`, {
        username: email,
        email: email,
        password: password
      })
      if(data.status === 200)
      {
          window.localStorage.setItem("token", data.data.token)
          window.localStorage.setItem("username", email)
          console.log(data.data.token);
          console.log(email);
          alert("Login successfull")
          window.location.href = "./user"
      }
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <div className="form_cont">
        <div className="login_form_left">
          <div className="login_tempcont">
            <form className="row g-3 login_form">
              <div className="form_head">LOGIN</div>
              <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email:
                </label>
                <input type="email" className="form-control" id="inputEmail4" onChange={(e) => {setEmail(e.target.value)}} />
              </div>
              <div className="col-md-12 mb-4">
                <label htmlFor="inputPassword4" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
              <div className="col-12 d-flex justify-content-between">
                <button type="submit" className="btn login_btn" onClick={handleSubmit}>
                  LOGIN
                </button>
                <div>
                  <p>New Here?</p>
                  <Link to="/register" className="login_link">
                    Register instead
                  </Link>
                </div>
              </div>
            </form>
          <div className="login_form_right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
