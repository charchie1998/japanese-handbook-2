const isKanji = (char: string): boolean => {
    const kanjiRegex = new RegExp('^[\u4e00-\u9faf]+$');
    return kanjiRegex.test(char);
}

const getAllKanji = (text: string): string[] => {
    const kanjiArray = text.split('').filter(char => isKanji(char));
    return kanjiArray;
}

export {
    isKanji,
    getAllKanji
}