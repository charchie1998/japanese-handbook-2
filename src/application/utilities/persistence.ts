import mongoose from 'mongoose';

const connect = async () => {
    mongoose.connect("");
}

const disconnect = async () => {
    mongoose.disconnect();
}

export default {
    connect,
    disconnect
}