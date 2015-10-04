function payWall() {
    var txId = 67a0164b7ad1ca0c87e837445cec887bab32873c4f90bede6a03a49c83191f09
        artistAddress = ['media-data']['alexandria-media']['info']['extra-info']['Bitcoin Address'];

    $.ajax({
        type: 'POST',
        url: 'http://' + serverAddress + ':41289/alexandria/v1/search',
        data: {
            'protocol': 'media',
            'search-on': 'txid',
            'search-for': txId
        },
        success: function(data) {
            if (data['Bitcoin Address'])
                artistAddress = data['Bitcoin Address'];
        }
    })
        .get('https://blockchain.info/api/receive?method=create&address=' + artistAddress);
}
