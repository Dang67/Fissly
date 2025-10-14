export default function calculateBmr(age: number, gender: boolean, height: number, weight: number): number {
    return 10 * weight + 6.25 * height - 5 * age + (gender ? 5 : -161);
};