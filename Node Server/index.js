const express = require('express')
const ws = require('ws');
const axios = require('axios')
const dotenv = require('dotenv')

const app = express()

const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

const appWs = require('express-ws')(app)

//this snippet gets the local ip of the node.js server. copy this ip to the client side code
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
})

app.use(express.json())


const accountSid = "ACf7237916e9b36c2055108a33c6ace238";
const authToken = "df2b1dd9c54876abc21997b72a35637a";
const client = require('twilio')(accountSid, authToken);

app.get('/send', (req, res) => {
    const bin_ip = req.body.bin_ip
    client.messages.create({
        body: `Your Dustbin with Bin_ip ${bin_ip} is almost FULL!`,
        from: '+15677043016',
        to: '+918516029236'
        })
    .then(message => console.log(message.sid));
    client.messages.create({
        body: `Your Dustbin with Bin_ip ${bin_ip} is almost FULL!`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+918770641875'
    })
    .then(message => console.log(message.sid))
})


const push_data = async ( client, moisture, ultraSonic) => {

    try{
        const data = await axios.get(`https://api-test4-production.up.railway.app/api/bin/ip/?bin_ip=${client}`)

        if(data.status === 200 && ultraSonic >= 0)
        {
            const newdata = {
                "bin_id" : data.data[0].bin_id,
                "bin_ip" : client,
                "moisture" : moisture,
                "filled": ultraSonic,
                "user_id" : data.data[0].user_id
            }
            const nData = JSON.stringify(newdata)
            console.log(newdata);
            console.log(nData);
            await axios.put(`https://api-test4-production.up.railway.app/api/bin/${data.data[0].bin_id}`, newdata)
        }
    }
    catch(err){
        console.log(err);
    }    
}

app.ws('/echo', ws => {
    ws.on('message', msg=>{
        const client = ws._socket.remoteAddress
        const data = msg.split(";")
        const ultraSonic = data[0]
        const moisture = parseInt(data[1])
        console.log(`recieved from client ${client}: ${moisture} and ${ultraSonic}`);

        const newData = {
            "bin_id" : 8,
            "bin_ip": client, 
            "moisture": moisture,
            "filled": ultraSonic,
            "user_id" : null
        }
        const nData = JSON.stringify(newData)
        // console.log(nData);
        
        push_data(client, moisture, ultraSonic)
    })
})


app.listen(process.env.PORT || 1000, ()=>{console.log("Server started...");})