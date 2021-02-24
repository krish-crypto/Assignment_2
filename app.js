const express=require('express');
const axios = require('axios');

const app= express();

app.get("/api",async(req,res)=>{
    try{
        //Take latitude and longitude in the url
        //http://localhost:3000/api?lat=37.8267&long=-122.4233
        const {lat,long} = req.query;
        console.log(req.query);
        //Weather Api Call
        let weatherApiUrl=`http://api.weatherstack.com/current?access_key=407f5eb6955e9398ec53cfb14ff5d60f&query=${lat},${long}`;
        //currency convertor Api  Call
        let currencyApi="https://currencyapi.net/api/v1/rates?key=LP7YtIJMBofr93n94QPCbos1RB6WZZjXqZDn&base=USD";
        const weatherDData = await axios.get(weatherApiUrl);
        const currency = await axios.get(currencyApi);
        
        //console.log(currency.data);
        //console.log(weatherDData.data);
        res.status(200).json({success:true,weatherData:weatherDData.data,currencyData:currency.data})
    }
    //Handle Error
    catch(err){
        console.log(err);
    }
})

// Setting the server
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})




