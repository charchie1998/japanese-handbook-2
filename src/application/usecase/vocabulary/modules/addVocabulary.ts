import { vocabularyModel } from '../../../../domain/model';

const addVocabulary = async (data: any) => {
    try {
        const newVocabulary = new vocabularyModel({
            ...data
        });

        const validationError = newVocabulary.validateSync();

        if (validationError) {
            throw new Error(validationError.message);
        };

        const addedVocabulary = await newVocabulary.save();
        return addedVocabulary;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to add vocabulary.');
    }
};

export default addVocabulary;