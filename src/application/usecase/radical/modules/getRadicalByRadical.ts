import { radicalModel } from '../../../../domain/model';

async function getRadicalByRadical(radical: string): Promise<any> {
    try {
        const result = await radicalModel.find({
            radical: radical
        });
        return result;
    } catch (error) {
        console.error('Error retrieving radical:', error);
        return null;
    }
}

export default getRadicalByRadical;