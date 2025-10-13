export enum UnitType { cmToFt, ftToCm, kgToLb, lbToKg }

export default function convertUnit(value: number, unit: UnitType): number {
    switch (unit as UnitType) {
        case UnitType.cmToFt:
            return value <= 0 ? -1 : value / 30.48;

        case UnitType.ftToCm:
            return value <= 0 ? -1 : value * 30.48;

        case UnitType.kgToLb:
            return value <= 0 ? -1 : value * 2.2;

        case UnitType.lbToKg:
            return value <= 0 ? -1 : value / 2.2;

        default:
            return 0;
    }
};