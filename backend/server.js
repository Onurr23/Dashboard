const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const Url = require('./Models/url');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{

    Url.find().then(urls=>{

        res.json(urls)

    }).catch(err=>{

        res.json('Error :'+ err)

    })


})

app.post('/',(req,res)=>{

    let urlhaus_reference = req.body.urlhaus_reference;
    let url = req.body.url;
    let url_status = req.body.url_status;
    let host = req.body.host;
    let date_added = Date.now();
    let threat = req.body.threat;
    let blacklists = req.body.blacklists;
    let reporter = req.body.reporter;
    let larted = req.body.larted;
    let tags = req.body.tags;

    const newUrl = new Url({urlhaus_reference,url,url_status,host,date_added,threat,blacklists,reporter,larted,tags});

    newUrl.save().then(()=>{

        res.json('ADDED !');

    }).catch(err=>{

        res.json('Error :'+ err)

    })

})

app.get('/user/')

mongoose.connect('mongodb+srv://onurr23:F6pTG8UpAzg2c62R@cluster0-swoaz.mongodb.net/node-app?retryWrites=true&w=majority').then(()=>{

    console.log('CONNECTED')

})

app.listen(5000,()=>{

    console.log('Server is running at 5000 ')

})
