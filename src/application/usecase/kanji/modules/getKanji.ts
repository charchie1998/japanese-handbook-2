import { kanjiModel } from '../../../../domain/model';

async function getKanji(kanjiId: string): Promise<any> {
    try {
        const kanji = await kanjiModel.findById(kanjiId);
        return kanji;
    } catch (error) {
        console.error('Error retrieving kanji:', error);
        return null;
    }
}

export default getKanji;

// Aggegation pipeline sample
//
// const kanji = await kanjiModel.aggregate([
//     {
//         $match: {
//             _id: new mongoose.Types.ObjectId(kanjiId),
//         }
//     },
//     {
//         $lookup: {
//             from: 'radicals',
//             localField: 'radicals',
//             foreignField: '_id',
//             as: '_radicals',
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             kanji: 1,
//             radicals: '$_radicals',
//             strokes: 1,
//             meanings: 1,
//             readings: 1,
//             notes: 1,
//             level: 1,
//             createdAt: 1,
//             updatedAt: 1,
//         }
//     },
//     {
//         $unwind: '$radicals2',
//     }
// ])

