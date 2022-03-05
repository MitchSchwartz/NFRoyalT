import * as getData from './getData'; //exported instead

function primeGetData(){
    console.log("hi");
    var x = document.getElementById('addressInput').value;
    getData(x);

}



function updateWalletStats(_walletData){
    var walletList = _walletData;
    document.getElementById('walletList').innerHTML = walletList;
}


document.getElementById('getButton').addEventListener("click", primeGetData);
document.getElementById('getButton').addEventListener("click", chart.updateChart);
