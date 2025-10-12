import {strings} from "@/app/information/strings";

export default function getBmi(height: number, weight: number): number {
    return height <= 0 || weight <=0 ? -1 : Number((weight / ((height / 100) ** 2)).toFixed(1));
}

export function getBmiInfo(bmi: number) {
    if (bmi === -1) return {text: '', color: ''};

    const messages = [
        {
            max: 18.5,
            color: 'deepskyblue',
            text: strings.weightAndHeight.bmiCard.message.underWeight
        },
        {
            max: 25,
            color: 'limegreen',
            text: strings.weightAndHeight.bmiCard.message.healthyWeight
        },
        {
            max: 30,
            color: '#ffcc00',
            text: strings.weightAndHeight.bmiCard.message.overWeight
        },
        {
            max: 35,
            color: 'coral',
            text: strings.weightAndHeight.bmiCard.message.obese
        },
        {
            max: 40,
            color: '#ff4444',
            text: strings.weightAndHeight.bmiCard.message.severelyObese
        },
        {
            max: Infinity,
            color: 'red',
            text: strings.weightAndHeight.bmiCard.message.morbidlyObese
        }
    ];

    const result = messages.find(m => bmi < m.max);
    return result || {text: '', color: ''};
}