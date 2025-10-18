export default function getHighestWeight(bmiData: number[]): number {
    if (bmiData.length === 0) {
        return 0;
    } else {
        return bmiData.reduce((prev, current) =>
            current < prev ? current : prev
        );
    }
};