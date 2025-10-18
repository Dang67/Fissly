export default function getAverageWeight(bmiData: number[]): number {
    if (bmiData.length === 0) {
        return 0;
    } else {
        return parseFloat((bmiData.reduce((sum, item) =>
            sum + item, 0) / bmiData.length).toFixed(1));
    }
};