import axios from 'axios'
import React, { useState } from 'react'

const AddBin = ({userId}) => {
    console.log(userId);
    const [ip, setIp] = useState("")

    const handleSubmit = async () => {
        try{
            const data = await axios.post(`https://api-test4-production.up.railway.app/api/bin/`, {
                user_id: userId,
                bin_ip: ip,
                moisture: 0, 
                filled: 0
            })
            console.log(data);
            window.location.href = "./user"
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add Your Bin</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="mb-2">
                        <label htmlFor="formGroupExampleInput" className="form-label">
                        Bin IP Address:
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        onChange={(e) => {setIp(e.target.value)}}
                        />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Bin</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddBin