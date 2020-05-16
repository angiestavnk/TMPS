function cryptoCurrencyAPI() {
    this.getValue = function(coin) {
        console.log('Calling external API');
        switch(coin) {
            case 'Bitcoin':
                return '9200 $';
            case 'Litecoin':
                return '50 $';
            case 'Ethereum':
                return '200 $';
        }
    }
}

export default function currencyProxy() {
    this.api = new cryptoCurrencyAPI();
    this.cache = {};

    this.getValue = function(coin){
        if(this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}  

 