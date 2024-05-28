

import persistence from '../../application/utilities/persistence';
import { radicalUsecase, kanjiUsecase } from '../../application/usecase';

const getKanji = async (data: any) => {
    try {
        await persistence.connect();
        const kanjiId = data.id || '';
        const result = await kanjiUsecase.getKanji(kanjiId);
        console.log(result);

        await persistence.disconnect();
        return result
    } catch (error: any) {
        console.error(error.message);
        await persistence.disconnect();
        throw new Error('Internal Server Error');
    }

}

const addKanji = async (data: any) => {
    try {
        await persistence.connect();
        const kanji = data || {};
        const radicals: any[] = [];

        if (kanji.radicals) {
            const radicalPromises = kanji.radicals.map((radical: any) => radicalUsecase.getRadicalByRadical(radical));
            const radicalResults = await Promise.all(radicalPromises);
            console.log(radicalResults);

            radicalResults.forEach((result, index) => {
                if (!result) {
                    throw new Error(`Radical not found for index ${index}.`);
                }
                radicals.push(result);
            });
        }
        
        kanji.radicals = radicals;

        const result = await kanjiUsecase.addKanji(kanji);

        await persistence.disconnect();
        return result;
    } catch (error: any) {
        console.error("Error:", error.message);
        await persistence.disconnect();
        throw new Error('Radical Service Error.');
    }
}

export {
    getKanji,
    addKanji
}