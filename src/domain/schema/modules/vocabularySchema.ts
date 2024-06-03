import mongoose, { Schema } from 'mongoose';

const vocabularySchema: Schema = new Schema({
    vocabulary: {
        type: String,
        unique: true,
        required: true,
    },
    kanji: {
        type: [ mongoose.Schema.Types.ObjectId ], 
        required: false,
        ref: 'Kanji',
    },
    type: {
        type: String,
        required: true,
    },
    meanings: {
        type: [ String ],
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
    synonym: {
        type: [ mongoose.Schema.Types.ObjectId ], 
        required: false,
        ref: 'Vocabulary',
    },
    antonym: {
        type: [ mongoose.Schema.Types.ObjectId ], 
        ref: 'Vocabulary',
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

export default vocabularySchema;
