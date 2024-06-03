

import persistence from '../../application/utilities/persistence';
import { getAllKanji } from '../../application/utilities/miscellaneous';
import { vocabularyUsecase, kanjiUsecase } from '../../application/usecase';

const getVocabulary = async (data: any) => {
    try {
        await persistence.connect();
        const vocabularyId = data.id || '';
        const result = await vocabularyUsecase.getVocabulary(vocabularyId);

        await persistence.disconnect();
        return result
    } catch (error: any) {
        console.error(error.message);
        await persistence.disconnect();
        throw new Error('Internal Server Error');
    }

}

const addVocabulary = async (data: any) => {
    try {
        await persistence.connect();
        const vocabulary = data || {};
        const kanji: any[] = getAllKanji(vocabulary.vocabulary);
        const kanjiIds: any[] = [];

        if (kanji) {
            const kanjiPromises = kanji.map((kanji: any) => kanjiUsecase.getKanjiByKanji(kanji));
            const kanjiResults = await Promise.all(kanjiPromises);
            console.log(kanjiResults);

            kanjiResults.forEach((result, index) => {
                if (!result) {
                    throw new Error(`Kanji not found for index ${index}.`);
                }
                kanjiIds.push(result);
            });
        }
        
        vocabulary.kanji = kanjiIds;
        
        const result = await vocabularyUsecase.addVocabulary(vocabulary);

        await persistence.disconnect();
        return result;
    } catch (error: any) {
        console.error("Error:", error.message);
        await persistence.disconnect();
        throw new Error('Radical Service Error.');
    }
}

export {
    getVocabulary,
    addVocabulary
}