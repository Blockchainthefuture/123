const readline = require('readline');
var intro = "Welcome To Paypal To Bitcoin";
console.log(intro);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  //console.log('Thank you for your valuable feedback:', answer);
  print(answer);
  rl.close();
});


var print = function(val, callback){
   console.log("Printing From Async Funciton", val);
};

