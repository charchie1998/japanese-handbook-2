import { radicalModel } from '../../../../domain/model';

async function getRadical(radicalId: string): Promise<any> {
    try {
        const radical = await radicalModel.findById(radicalId);
        return radical;
    } catch (error) {
        console.error('Error retrieving radical:', error);
        return null;
    }
}

export default getRadical;