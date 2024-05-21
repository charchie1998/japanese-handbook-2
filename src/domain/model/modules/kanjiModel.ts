import mongoose from 'mongoose';
import schema from '../../schema';

const Kanji = mongoose.model('Kanji', schema.kanjiSchema);

export default Kanji;