const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Database has  been connected successfully");
})
.catch((err)=>{
    console.log(err);
});