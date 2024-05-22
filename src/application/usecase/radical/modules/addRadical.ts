import { radicalModel } from '../../../../domain/model';

const addRadical = async (radicalData: any) => {
    try {
        const newRadical = new radicalModel({
            radical: radicalData.radical,
            meaning: radicalData.meaning,
            strokes: radicalData.strokes,
            positions: radicalData.positions,
            reading: radicalData.reading,
            notes: radicalData.notes,
            relevance: radicalData.relevance
        });

        const validationError = newRadical.validateSync();

        if (validationError) {
            throw new Error(validationError.message);
        };
        
        const addedRadical = await newRadical.save();
        return addedRadical;
    } catch (error: any) {
        console.error("Error:", error.message);
        throw new Error("Add Radical Failed");
    }
};

export default addRadical;