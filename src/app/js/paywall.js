function payWall() {
	//hard coding txId for now, needs some kind of input
    var txId = 67a0164b7ad1ca0c87e837445cec887bab32873c4f90bede6a03a49c83191f09i;
    var artistAddress = ['media-data']['alexandria-media']['info']['extra-info']['Bitcoin Address'];
    var pwywData = ['media-data']['alexandria-media']['info']['extra-info']['pwyw'];
    var minimumUnlockFee
    var dispAddress = ['input-address']; 
    var artifactCostBTC 
    var artifactCostUSD
    var BTCUSD // this value comes from main.js
    var amountReceived 

    //access libraryd
    $.ajax({
        type: 'POST',
        url: 'http://' + serverAddress + ':41289/alexandria/v1/search',
        data: {
            'protocol': 'media',
            'search-on': 'txid',
            'search-for': txId
        },
        success: function(data) {
            //retreive artistAddress 
	    if (data['Bitcoin Address'])
                artistAddress = data['Bitcoin Address'];
	    //retreive artifactCostUSD 
	    if (data['pwyw'])
		pwywData = data['pwyw']
		//convert cost to btc
		artifactCostUSD = // the second value in pwywData
		artifactCostBTC = ((artifactCostUSD * 100) / BTCUSD) 
        }
    })
    //create disposable address for the artist
    .get('https://blockchain.info/api/receive?method=create&address=' + artistAddress, function ( data ) {
	if (data['input_address'])
	    dispAddress = data['input-address']	
loadQR(dispAddress)    
//check blockchain for transactions  , if no transactions, check again
while (amountReceived < artifactCostBtc) 
    .get('https://blockchain.info/q/getreceivedbyaddress/ + dispAddress {
	if (data[])
    	    amountReceived = data[]

//load artifact
if (amountReceived >= artifactCostBTC)
  // load artifact , i don't know how to do this

}


