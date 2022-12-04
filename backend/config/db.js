import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://sbk-DB:1234567890@mern-app.1q3mrf4.mongodb.net/BMS-DB?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error}`.red.underline.bold)

    // Exit process with failure
    process.exit(1)
  }
}

export default connectDB
