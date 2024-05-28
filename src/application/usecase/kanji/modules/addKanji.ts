import { kanjiModel } from '../../../../domain/model';

const addKanji = async (kanjiData: any) => {
    try {
        const newKanji = new kanjiModel({
            kanji: kanjiData.kanji,
            radicals: kanjiData.radicals,
            meaning: kanjiData.meaning,
            strokes: kanjiData.strokes,
            readings: kanjiData.readings,
            notes: kanjiData.notes,
            level: kanjiData.level,
            relevance: kanjiData.relevance
        });

        const validationError = newKanji.validateSync();

        if (validationError) {
            throw new Error(validationError.message);
        };

        const addedRadical = await newKanji.save();
        return addedRadical;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to add kanji');
    }
};

export default addKanji;