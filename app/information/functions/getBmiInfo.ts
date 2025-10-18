import {infoStr} from "@/constants/strings/infoStr";

export default function getBmiInfo(bmi: number) {
    if (bmi === -1) return {text: '', color: ''};

    const messages = [
        {
            max: 18.5,
            color: 'deepskyblue',
            text: infoStr.weightAndHeight.bmiCard.message.underWeight
        },
        {
            max: 25,
            color: 'limegreen',
            text: infoStr.weightAndHeight.bmiCard.message.healthyWeight
        },
        {
            max: 30,
            color: 'orange',
            text: infoStr.weightAndHeight.bmiCard.message.overWeight
        },
        {
            max: 35,
            color: 'coral',
            text: infoStr.weightAndHeight.bmiCard.message.obese
        },
        {
            max: 40,
            color: 'tomato',
            text: infoStr.weightAndHeight.bmiCard.message.severelyObese
        },
        {
            max: Infinity,
            color: 'orangered',
            text: infoStr.weightAndHeight.bmiCard.message.morbidlyObese
        }
    ];

    const result = messages.find(m => bmi < m.max);
    return result || {text: '', color: ''};
}