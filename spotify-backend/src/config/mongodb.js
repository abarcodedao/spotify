import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('ket noi MongoDB thanh cong')
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`)
}

export default connectDB;