export default function getHighestWeight(weightData: { value: number, label: string }[]): number {
    if (weightData.length === 0) {
        return 0;
    } else {
        return weightData.reduce((prev, current) =>
            current.value > prev.value ? current : prev
        ).value;
    }
};