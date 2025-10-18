export default function getAverageWeight(weightData: { value: number, label: string }[]): number {
    if (weightData.length === 0) {
        return 0;
    } else {
        return parseFloat((weightData.reduce((sum, item) =>
            sum + item.value, 0) / weightData.length).toFixed(1));
    }
};