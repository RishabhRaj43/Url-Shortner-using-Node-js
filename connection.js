const mongooose = require("mongoose");

const connectMongo = (url)=>{
  return mongooose.connect(url);
}

module.exports = {
  connectMongo
}