import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddBin from './AddBin'
import { Link } from 'react-router-dom'

const User = () => {

  const [userData, setUserData] = useState([])
  const [binData, setBinData] = useState([])

  const fetchData = async () => {
    const username = window.localStorage.getItem("username")
    const token = window.localStorage.getItem("token")
    console.log(username);
    console.log(token);
    const headers = {
      "Authorization": `Token ${token}`
    }

    try{
      const data = await axios.get(`https://api-test4-production.up.railway.app/api/a/list/`, {
        headers: headers
      })
      setUserData(data.data[0])
    }
    catch(err){
      console.log(err);
    }
  }

  const fetchBinData = async () => {
    try{
      const data = await axios.get(`https://api-test4-production.up.railway.app/api/bin/list/${userData.user_id}`)
      setBinData(data.data)
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchBinData()
  }, [userData])

  const handleDelete = async (i) => {
      try{
        await axios.delete(`https://api-test4-production.up.railway.app/api/bin/${i.bin_id}`)
        alert("Bin deleted")
        window.location.href = "./user"
      }
      catch(err){
        console.log(err);
      }
  }
  
  console.log(userData);
  console.log(binData);
  return (
    <>
        <AddBin userId={userData.user_id} />
        <div className="user_main_cont">
          <div className="bindetails">
              <div className="user_bin_cont">
                <div className="bin_heading">
                  <h3>Added Bins:</h3>
                  <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </div>
                {
                  binData.map((i) => {
                    return <div className="BinCard">
                      <p> IP -- <span>{i.bin_ip}</span> </p>
                      <div className="bin_btn_cont">
                        <Link to={`/bin/${i.bin_id}`}> <i class="fa-solid fa-lock-open"></i> </Link>
                        <i class="fa-solid fa-trash" onClick={() => handleDelete(i)}></i>
                      </div>
                   </div>
                  })
                }
              </div>
          </div>
          <div className="userdetails">
            <i class="fa-regular fa-user"></i>
            <div className="name">{userData.name}</div>
            <div className="phone_cont user_det_contain">
                <h4>Phone: </h4>
                <p>{userData.phno}</p>
            </div>
            <div className="email_cont user_det_contain">
                <h4>Email: </h4>
                <p>{userData.email}</p>
            </div>
            <div className="address_cont user_det_contain">
                <h4>Address: </h4>
                <div className='addCont'>
                  <p>{userData.address}</p>
                  <p>{userData.state}</p>
                </div>
            </div>
            <div className="zip_cont user_det_contain">
                <h4>Pin Code: </h4>
                <p>{userData.zip}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default User