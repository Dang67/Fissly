export default function calculateBmi(height: number, weight: number): number {
    return height <= 0 || weight <= 0 ?
        -1 :
        parseFloat((weight / ((height / 100) ** 2)).toFixed(1).replace(',', '.'));
}