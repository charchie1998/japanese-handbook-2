import { Schema } from 'mongoose';

const radicalSchema: Schema = new Schema({
    radical: {
        type: String,
        required: true,
    },
    strokes: {
        type: Number,
        required: true,
    },
    meaning: {
        type: String,
        required: true,
    },
    positions: {
        type: [String],
        required: false,
    },
    reading: {
        type: String,
        required: false,
    },
    notes: {
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

export default radicalSchema;
