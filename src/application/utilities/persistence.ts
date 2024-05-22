import mongoose from 'mongoose';
import Variables from '../enum/variables';

const databaseName: Variables = Variables.DATABASE_NAME;
const connectionString: string = `mongodb://localhost:27017/${databaseName}`;

const connect = async (): Promise<void> => {
    await mongoose.connect(connectionString, {})
    console.log('Connected to MongoDB');
    return;
}

const disconnect = async (): Promise<void> => {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    return;
}

export default {
    connect,
    disconnect
}