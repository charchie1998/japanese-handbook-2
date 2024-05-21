import mongoose from 'mongoose';
import schema from '../../schema';

const Radical = mongoose.model('Radical', schema.radicalSchema);

export default Radical;