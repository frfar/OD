const mongoose = require('mongoose');

const URI =
 "mongodb+srv://Frfar:yrLx4hl3opbltycB@cluster0-rx2t1.mongodb.net/test?retryWrites=true&w=majority";

const connectDB= async()=>{
    await mongoose.connect(URI, { useNewUrlParser: true,
        useUnifiedTopology: true
     }   );
    console.log('db connected');
}

module.exports = connectDB;