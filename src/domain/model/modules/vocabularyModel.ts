import mongoose from 'mongoose';
import schema from '../../schema';

const Vocabulary = mongoose.model('Vocabulary', schema.vocabularySchema);

export default Vocabulary;