const Driver = require('../models/driver');
module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  create(req , res){

    const driverProps =  req.body;
    console.log(driverProps)

    Driver.create(driverProps).then(driver => res.send(driver)).catch(next);




  },
  edit(req , res , next){

    const driverId = req.params.id;

    const driverProps =  req.body;

    Driver.findByIdAndUpdate({_id: driverId} , driverProps)
    .then(()=>{
      Driver.findById({_id:driverId})
      
    })
    .then(driver => res.send(driver))
    .catch(next);

  }
  ,
  delete(req , res , next){
    const driverId = req.params.id;

    Driver.findByIdAndRemove({_id:driverId}).then((driver)=>{

      res.send(driver)
    }).catch(next);
    
  }
};
