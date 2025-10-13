import {infoStr} from "@/constants/strings/infoStr";
import {useCustomColors} from "@/hooks/useCustomColors";

export default function getBmiInfo(bmi: number) {
    if (bmi === -1) return {text: '', color: ''};

    const messages = [
        {
            max: 18.5,
            color: 'dodgerblue',
            text: infoStr.weightAndHeight.bmiCard.message.underWeight
        },
        {
            max: 25,
            color: 'forestgreen',
            text: infoStr.weightAndHeight.bmiCard.message.healthyWeight
        },
        {
            max: 30,
            color: 'gold',
            text: infoStr.weightAndHeight.bmiCard.message.overWeight
        },
        {
            max: 35,
            color: 'orange',
            text: infoStr.weightAndHeight.bmiCard.message.obese
        },
        {
            max: 40,
            color: 'orangered',
            text: infoStr.weightAndHeight.bmiCard.message.severelyObese
        },
        {
            max: Infinity,
            color: 'red',
            text: infoStr.weightAndHeight.bmiCard.message.morbidlyObese
        }
    ];

    const result = messages.find(m => bmi < m.max);
    return result || {text: '', color: ''};
}