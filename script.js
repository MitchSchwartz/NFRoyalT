function primeGetData(){
    console.log("hi");
    var x = document.getElementById('addressInput');
    getData(x);

}


function updateWalletStats(_walletData){
    var walletList = _walletData;
    document.getElementById('walletList').innerHTML = walletList;
}


document.getElementById('addressInput').addEventListener("click", primeGetData);

