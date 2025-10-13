export default function calculateIdealWeight(height: number) {
    return height <= 0 ?
        null :
        (((height / 100) ** 2) * 18.5).toFixed(1).replace(',', '.') + ' - ' +
        (((height / 100) ** 2) * 24.9).toFixed(1).replace(',', '.');
};