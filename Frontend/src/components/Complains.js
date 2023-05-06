import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Complains = () => {

  const [email, setEmail] = useState("")
  const [issue, setIssue] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    const headers = {
      "Authorization": `Token ${token}`
    }

    try{
      const data = await axios.post(`https://api-test4-production.up.railway.app/api/complain/`, {
        email: email,
        issue: issue
      }, {
        headers: headers
      })
      console.log(data);
      setEmail("")
      setIssue("")
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className="complains">
        <div className="complain_head">
          <h1>We Hear our Users</h1>
          <p>Reach Out to us with Your Problems and we will try to Solve them as soon as possible.</p>
        </div>
        <form className="compain_form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Issue:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              defaultValue={""}
              onChange={(e) => setIssue(e.target.value)}
            />
          </div>
          <div class="col-12">
            <button type="submit" class="btn login_btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Complains;
