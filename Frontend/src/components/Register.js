import React, { useState } from "react";
import img from "../reg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [name, setName] = useState("")
  const [phNo, setPhNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const data = await axios.post(`https://api-test4-production.up.railway.app/api/register/`, {
          username: email,
          email: email,
          password: password
      })
      if(data.status === 200)
      {
          window.localStorage.setItem("username", data.data.user.username)
          window.localStorage.setItem("token", data.data.token)
          console.log(data.data.token);
          console.log(data.data.user.username);

          const headers = {
            Authorization: `Token ${data.data.token}`
          }
          
          const data2 = await axios.post(`https://api-test4-production.up.railway.app/api/a/`, {
              name: name,
              phno: phNo,
              email: email,
              password: password,
              address: address,
              state: state, 
              zip: zip
          }, {
              headers: headers
          })

          if(data2.status === 200)
          {
            alert("Registration successfull")
            window.location.href = "./user"
          }
      }
    }
    catch(err){
      alert("Some Unknown Error Occured! Try Again")
      console.log(err);
    }
  }

  return (
    <>
      <div className="form_cont">
        <div className="reg_form_left">
          <div className="reg_tempcont">
            <form className="row g-3 reg_form">
              <div className="form_head">REGISTER</div>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input type="text" className="form-control" id="name" onChange={(e) => {setName(e.target.value)}} />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone No:
                </label>
                <input type="text" className="form-control" id="phone" onChange={(e) => {setPhNo(e.target.value)}} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email:
                </label>
                <input type="email" className="form-control" id="inputEmail4" onChange={(e) => {setEmail(e.target.value)}} />
              </div>
              <div className="col-md-6">
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
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address:
                </label>
                <input type="text" className="form-control" id="inputAddress" onChange={(e) => {setAddress(e.target.value)}} />
              </div>
              <div className="col-md-8">
                <label htmlFor="inputCity" className="form-label">
                  State:
                </label>
                <input type="text" className="form-control" id="inputCity" onChange={(e) => {setState(e.target.value)}} />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="inputZip" className="form-label">
                  Pin Code:
                </label>
                <input type="number" className="form-control" id="inputZip" onChange={(e) => {setZip(e.target.value)}} />
              </div>
              <div className="col-12 d-flex justify-content-between">
                <button type="submit" className="btn login_btn" onClick={handleSubmit}>
                  REGISTER
                </button>
                <div>
                  <p>Already have an account?</p>
                  <Link to="/login" className="login_link">
                    Login instead
                  </Link>
                </div>
              </div>
            </form>
            <div className="reg_form_right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
