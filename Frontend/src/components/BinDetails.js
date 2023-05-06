import React, { useEffect, useState } from 'react'

const BinDetails = ({onClose, color}) => {

    const [binData, setBinData] = useState("")

    useEffect(() => {
        if(color === "red") setBinData(data.red)
        else if(color === "blue") setBinData(data.blue)
        else if(color === "green") setBinData(data.green)
    }, [])

    const data = {
        red: "It is used for waste that is not biodegradable. It is also regarded as rejecting dustbin as these wastes cannot be recycled. It is usually placed in hospitals and used to collect biomedical wastes, which are dangerous to deal with and consists of needles, surgical knives, body fluids, cotton dressings, pop casts, tissues, sanitary napkins, etc., which are to be disposed of carefully. If not disposed of properly, diseases like HIV, Hepatitis B and C will be transferred through the pricking of infected needles. It contains both hazardous and non-hazardous wastes. As these waste materials cannot be recycled, they are taken for incineration.",
        blue: "It is used for dry and non-biodegradable wastes. Dry waste means literally dry, i.e., if the paper is dry, it is thrown in a blue dustbin and thrown in a green dustbin if it is wet. Liquid wastes are removed, rinsed, and the plastic wrappers and covers are dropped in the dustbin after drying. As microorganisms cannot break down this waste, it is called as non-biodegradable waste and it is to be recycled. If not disposed of properly, they cause pollution and harm the environment. Materials like plastic, aluminium cans, polystyrene, newspapers, paints, aerosol cans, lights, broken bulbs, glass bottles, plastic bottles, gift wrappers, cards, cardboards, thermal coal, tetra pack packaging etc., are to be thrown in this dustbin.",
        green: "It is used for wet and biodegradable wastes. It is also referred to as an organic bin as it contains wastes from kitchen, plant and animal origin. These wastes comprise rotten eggs, fruits, vegetables and peels, coconut shells, tea bags, used tea powder, left-over food, garden waste, etc. Organic waste is also used as manure in the kitchen garden to grow vegetables. Some of these wastes are sterilised and fed to animals, and farmers use the remaining waste for manure and composting, which helps in improving the fertility of the soil. This waste is turned to zero waste through composting. Sometimes if plastic wrappers are mixed with this waste and if, unfortunately, animals eat, it leads to the death of the animal. So the disposal of waste should be done carefully."
    }

  return (
    <>
        <div className='bin_details'>
            <h3 style={{color: color}}>{color} dustbin</h3>
            <p>{binData}</p>
            <div className="btn_grp_delete">
                <button onClick={onClose} className='btn ok_btn'>OK</button>
            </div>
        </div>
    </>
  )
}

export default BinDetails