CoinDesk = require("node-coindesk");
coindesk = new CoinDesk();
coindesk.currentPrice(function(data){
  console.log(data);
});
CoinDesk = require("node-coindesk");
coindesk = new CoinDesk({currency: "CAD"});
CoinBase = require("node-coindesk");
coindesk = new CoinDesk();
var start_date = new Date();
var end_date = new Date();
end_date.setDate(end_date.getDate() - 60);
coindesk.historical({start_date: new Date(), end_date: end_date }, function(data) {
  console.log(data);
});
