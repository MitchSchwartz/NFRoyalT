
export default function getData(_address){
    document.getElementById("addressInput").value = toString(_address);

    console.log("_addres:",_address); 
  
    // HTTP/1.0
    // Host: api-free.deepl.com
    // User-Agent: YourApp
    // Accept: */*
    // Content-Length: _text.Length
    // Content-Type: application/x-www-form-urlencoded
    
    
    const auth =''; 
    const address = _address;
    const url = `&key=${auth}`;
  
  
    fetch(url, {
      method: "POST"
    }).then(res => res.json()).then(res => console.log(res)).catch(error => console.log(error))
  
      
    //set up callback url
    //print response
  
    //console.log("Response ", r.)
  
  }