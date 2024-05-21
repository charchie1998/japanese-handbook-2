import mongoose, { Schema } from 'mongoose';

const kanjiSchema: Schema = new Schema({
    radicals: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'radicalSchema'
    },
    strokes: {
        type: Number,
        required: true,
    },
    meaning: {
        type: String,
        required: true,
    },
    readings: {
        type: [String],
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    level: {
        type: String,
        required: false,
    },
    relevance: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
    },
});

export default kanjiSchema;
