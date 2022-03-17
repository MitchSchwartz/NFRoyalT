// import * as dotenv from 'https://cdn.jsdelivr.net/npm/dotenv@6.2.0/'; 
// require('dotenv').config()
const http = new EasyHTTP;


function getData(){
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
    //const url = `https://api.covalenthq.com/v1/1/tokens/0xe4605d46fd0b3f8329d936a8b258d69276cba264/nft_metadata/123/?key=ckey_bd5463dca12642f08130b3490e0`;
    const url = `https://api.covalenthq.com/v1/1/nft_market/collection/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/?key=ckey_bd5463dca12642f08130b3490e0`;

    

    http.get(url)
    .then(res =>{
      const data = res.data.items[0];
      console.log(data);
      document.getElementById("CollectionName").innerHTML = data.collection_name;
      document.getElementById("ticker").innerText = data.collection_ticker_symbol;
      document.getElementById("floorPrice").innerText = data.floor_price_quote_7d;
      document.getElementById("blockchainId").innerText = data.chain_id;
    })
      .catch(err => console.log(err));

    return('ok');
    //set up callback url
    //print response
  
    //console.log("Response ", r.)
  
}



//get list of tokens ids
getTokens = _contractId => {
  return
  let chainID = 1;
  let collectionId = (_contractId? _contractId: '0xe4605d46fd0b3f8329d936a8b258d69276cba264');
  const tokens = [];
  http.get(`https://api.covalenthq.com/v1/${chainID}/tokens/${collectionId}/nft_token_ids/?key=ckey_bd5463dca12642f08130b3490e0`)
    .then(res => {
      console.log(res);
      const tokenData = res.data.items;
      tokenData.forEach(tokenData => {
        tokens.push(tokenData.token_id);
      });
      console.log(tokens);
      return(tokens);
    }
    )
      .catch(err => console.log(err));

  
}

//get all transactions
getTransactions = _tokenList => {
  let chainID = 1;
  let collectionId = (_tokenList? _constractId: '0xe4605d46fd0b3f8329d936a8b258d69276cba264');
  const tokens = [];
  http.get(`https://api.covalenthq.com/v1/${chainID}/tokens/${collectionId}/nft_token_ids/?key=ckey_bd5463dca12642f08130b3490e0`)
    .then(res => {
      console.log(res);
      const tokenData = res.data.items;
      tokenData.forEach(tokenData => {
        tokens.push(tokenData.token_id);
      });
      console.log(tokens);
      return(tokens);
    })
    .catch(err => console.log(err));
}




//grab secondary data and group by address paid to