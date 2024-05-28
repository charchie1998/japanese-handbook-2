import { Schema } from 'mongoose';

const radicalSchema: Schema = new Schema({
    radical: {
        type: String,
        unique: true,
        required: true,
    },
    strokes: {
        type: Number,
        required: true,
    },
    meanings: {
        type: [ String ],
        required: true,
    },
    positions: {
        type: [ String ]
    },
    isPseudo: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
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
