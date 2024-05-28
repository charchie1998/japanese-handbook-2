import { vocabularyModel } from '../../../../domain/model';

async function getVocabulary(vocabularyId: string): Promise<any> {
    try {
        const vocabulary = await vocabularyModel.findById(vocabularyId);
        return vocabulary;
    } catch (error) {
        console.error('Error retrieving Vocabulary:', error);
        return null;
    }
}

export default getVocabulary;