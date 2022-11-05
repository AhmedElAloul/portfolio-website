const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://majedhasan:majedhasan@midtermexam.ojlvqrx.mongodb.net/portfolio_website?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB