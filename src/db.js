import mongoose from "mongoose";

export const connectDB = async () => {
     try {
          const conn = await mongoose.connect("mongodb+srv://drsuthar781:W816FiPhSpaMft2r@cluster0.duqgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
          console.log(`MongoDB Connected: ${conn.connection.host}`);
     } catch (error) {
          console.log(error);
          process.exit(1);
     }
};




let userSchema = new mongoose.Schema({
     name: { type: String, index: true },
     password: String,
});

export const User = mongoose.model("User", userSchema);