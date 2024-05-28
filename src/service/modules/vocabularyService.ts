

import persistence from '../../application/utilities/persistence';
import { radicalUsecase } from '../../application/usecase';

const getRadical = async (data: any) => {
    try {
        await persistence.connect();
        const radicalId = data.id || '';
        const result = await radicalUsecase.getRadical(radicalId);

        await persistence.disconnect();
        return result
    } catch (error: any) {
        console.error(error.message);
        await persistence.disconnect();
        throw new Error('Internal Server Error');
    }

}

const addRadical = async (data: any) => {
    try {
        await persistence.connect();
        const radical = data || {};
        const result = await radicalUsecase.addRadical(radical);

        await persistence.disconnect();
        return result;
    } catch (error: any) {
        console.error("Error:", error.message);
        await persistence.disconnect();
        throw new Error('Radical Service Error.');
    }
}

export {
    getRadical,
    addRadical
}