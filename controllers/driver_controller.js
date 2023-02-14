const Driver = require('../models/driver');
module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  create(req , res){

    const driverProps =  req.body;
    console.log(driverProps)

    Driver.create(driverProps).then(driver => res.send(driver)).catch(next());




  }
};
