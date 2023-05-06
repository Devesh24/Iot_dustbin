import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const Bin = () => {

    let { bin_id } = useParams();

    const [height, setHeight] = useState(70)
    const [dustBg, setDustBg] = useState("")
    const [mstHeight, setMstHeight] = useState(20)
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])

    const fetchData = async () => {
        try{
            const res = await axios.get(`https://api-test4-production.up.railway.app/api/bin/${bin_id}`)
            setData(res.data)
            setHeight(res.data.filled)
            setMstHeight(res.data.moisture)
        }
        catch(err){
            console.log(err);
        }
    }
    const fetchUserData = async () => {
        const token = window.localStorage.getItem("token")
        const headers = {
            "Authorization": `Token ${token}`
        }
        try{
            const res = await axios.get(`https://api-test4-production.up.railway.app/api/a/${data.user_id}`, {
                headers: headers
            })
            setUserData(res.data)
        }
        catch(err){
            console.log(err);
        }
    }

    console.log(data);
    console.log(userData);

    useEffect(()=>{
        setInterval(() => {
            fetchData()
        }, 2000);
    },[])

    useEffect(() => {
        data && fetchUserData()
    }, [data])

    useEffect(() => {
        if(height <= 50)
        {
            setDustBg("green")
        }
        else if(height <= 80)
        {
            setDustBg("orange")
        }
        else
        {
            setDustBg("#d23232")
        }

        if(height >= 80)
        {
            axios.get('http://localhost:1000/send', {
                bin_ip: data.bin_ip
            })
        }
    }, [height])

    const dustbinStyle = {
        height: `${height}%`,
        backgroundColor: dustBg
    }

    const mstStyle = {
        height: `${mstHeight}%`,
    }

  return (
    <>
        <div className="bin_top_cont">
            <div className="bin_user_det">
                <i class="fa-solid fa-user mb-4"></i>
                <div className="bin_name_cont">
                    <h5>NAME:</h5>
                    <p>{userData.name}</p>
                </div>
                <div className="bin_phno_cont">
                    <h5>PHONE NO:</h5>
                    <p>{userData.phno}</p>
                </div>
            </div>
            <div className="bin_hgt_data_cont">
                <i class="fa-solid fa-box-archive"></i>
                <p className="hgt_data">{height}<span>%</span></p>
                <p className='hgt_content'>Waste Level</p>
            </div>
            <div className="bin_mst_data_cont">
                <i class="fa-solid fa-droplet"></i>
                <p className="hgt_data">{mstHeight}<span>%</span></p>
                <p className='hgt_content'>Moisture Level</p>
            </div>
        </div>
        <div className="bin_main_cont">
            <div className='temp'>
                <h4>Waste Level</h4>
                <div className="lid_top"></div>
                <div className="lid"></div>
                <div className="dustbin">
                    <div className="dust_inner" style={dustbinStyle}></div>
                    <div className="line1">
                        <i class="fa-solid fa-recycle"></i>
                    </div>
                </div>
            </div>
            <div className="mst_main_cont">
                <h4>Moisture Level</h4>
                <div className="mst_bar">
                    <div className="mst_inner" style={mstStyle}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bin