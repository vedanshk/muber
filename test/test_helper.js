const mongoose = require("mongoose");

before((done) => {
  mongoose.connect("mongodb://localhost:37017/muber_test");
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", (err) => {
      console.warn("Warning", err);
      done()
    });
});


beforeEach(done =>{

    const {drivers}  = mongoose.connection.collections;

    drivers.drop()
    .then(()=>{
        done();
    })
    .catch(()=>{
        done();
    })
})
