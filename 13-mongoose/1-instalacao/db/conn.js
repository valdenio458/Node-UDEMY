import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://localhost:27017/db-name')
    console.log('Connected to MongoDB with Mongoose');
};
main().catch((error) => console.error);;  

export default mongoose;