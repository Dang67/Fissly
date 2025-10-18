export default function getModeWeight(weightData: { value: number, label: string }[]): number {
    if (weightData.length === 0) {
        return 0;
    } else {
        return (() => {
            const counts: Record<number, number> = {};
            weightData.forEach(item => {
                counts[item.value] = (counts[item.value] ?? 0) + 1;
            });

            return Number(
                Object.keys(counts).reduce((a, b) =>
                    counts[Number(a)] > counts[Number(b)] ? a : b
                )
            );
        })()
    }
};