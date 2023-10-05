const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
 
var api_key = 'a7fae5f59f8d9a3d07b58c64ccf3a55d-77316142-3679eb09';
var domain = 'sandbox0f41b3cad2024ca39cd951800f7e7e5c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});



app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req,res)=>{
    const email = req.body.email
    res.send("Email submitted!")

    var data = {
        from: 'Li<hangyuli@mail.com>',
        to: email,
        subject: 'Subcribed',
        text: 'Successful Subscribed!'
    };

    mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error)
        }
      console.log(body);
    });
})

app.listen(3000, function (request, response){
    console.log("Server is running on port 3000.")
})


 

