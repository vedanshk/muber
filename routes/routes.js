
const DriversController = require('../controllers/driver_controller');
module.exports = (app)=>{
    app.get('/api' , DriversController.greeting);
    


};