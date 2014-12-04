angular.module('finance2', [])
  .factory('currencyConverter', ['$http',function() {
    var YAHOO_FINANCE_URL_PATTERN =           'http://query.yahooapis.com/v1/public/yql?q=select * from '+
          'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
          'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';

    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};
    var refresh = function() {
      var url = YAHOO_FINANCE_URL_PATTERN.replace('PAIRS','USD' + currencies.join('","USD'));
      return $http.jsonp(url).success(function(data) {
        var newUsdToForiegnrates = {};
        angular.forEach(data.)
        var currency = rate.id.substring(3,6);
        newUsdToForiegnrates[currency] = window.parseFloat(rate.Rate);
      });
      usdToForeignRates = newUsdToForiegnrates;
    };
  }]);