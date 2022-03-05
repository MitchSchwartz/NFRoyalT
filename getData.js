// import * as dotenv from 'https://cdn.jsdelivr.net/npm/dotenv@6.2.0/'; 
// require('dotenv').config()

export function getData(){
    let _address = document.getElementById("addressInput").value;

    console.log("_addres:",_address); 
  
    // HTTP/1.0
    // Host: api-free.deepl.com
    // User-Agent: YourApp
    // Accept: */*
    // Content-Length: _text.Length
    // Content-Type: application/x-www-form-urlencoded
    
    
    const auth = 'ckey_bd5463dca12642f08130b3490e0';//'process.env.covalentKey'; 
    const address = _address;
    const url = `https://api.covalenthq.com/v1/1/nft_market/collection/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/?key=ckey_bd5463dca12642f08130b3490e0&key=${auth}`;

    
  
    fetch(url, {
      method: "POST"
    }).then(res => res.json()).then(res => console.log(res)).catch(error => console.log(error))
  
      
    //set up callback url
    //print response
  
    //console.log("Response ", r.)
  
  }