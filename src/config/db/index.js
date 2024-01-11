import mongoose from 'mongoose';

export default function connectDB() {
  const url = "mongodb://127.0.0.1/blog_db";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conect Succfully');
  } catch (err) {
    console.error("Loi");
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
