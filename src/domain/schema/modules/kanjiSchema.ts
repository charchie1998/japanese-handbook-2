import mongoose, { Schema } from 'mongoose';

const kanjiSchema: Schema = new Schema({
    kanji: {
        type: String,
        unique: true,
        required: true,
    },
    radicals: {
        type: [ mongoose.Schema.Types.ObjectId ], 
        validate: [
            { validator: (val: mongoose.Types.ObjectId[]) => val.length > 0, message: 'Radicals array cannot be empty' },
            { validator: (val: mongoose.Types.ObjectId[]) => val.every(mongoose.Types.ObjectId.isValid), message: 'All radicals must be valid ObjectIds' }
        ],
        required: true,
        ref: 'Radical',
    },
    strokes: {
        type: Number,
        required: true,
    },
    meanings: {
        type: [ String ],
        required: true,
    },
    readings: {
        type: { onyomi: [String], kunyomi: [String] },
        validate: [
            { validator: (val: { onyomi: string[], kunyomi: string[] }) => val.onyomi.length > 0 || val.kunyomi.length > 0, message: 'At least one of onyomi or kunyomi must be provided' },
        ],
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
    level: {
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
