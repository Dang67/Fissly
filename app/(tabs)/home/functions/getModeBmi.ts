export default function getModeWeight(bmiData: number[]): number {
    if (bmiData.length === 0) {
        return 0;
    } else {
        return (() => {
            const counts: Record<number, number> = {};
            bmiData.forEach(item => {
                counts[item] = (counts[item] ?? 0) + 1;
            });

            return Number(
                Object.keys(counts).reduce((a, b) =>
                    counts[Number(a)] > counts[Number(b)] ? a : b
                )
            );
        })()
    }
};