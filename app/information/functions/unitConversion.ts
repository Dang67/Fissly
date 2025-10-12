export default function convertFtToCm(value: number): number {
    return value <= 0 ? -1 : value * 30.48;
}

export function convertCmToFt(value: number): number {
    return value <= 0 ? -1 : value / 30.48;
}

export function convertLbToKg(value: number) {
    return value <= 0 ? -1 : value / 2.2;
}

export function convertKgToLb(value: number) {
    return value <= 0 ? -1 : value * 2.2;
}