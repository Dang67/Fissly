import {homeStr} from "@/constants/strings/homeStr";

export default function getBmiFormat(bmi: number): { label: string, color: string } {
    if (bmi <= 18.5) {
        return {label: homeStr.underWeight, color: 'deepskyblue'};
    } else if (bmi > 18.5 && bmi < 25) {
        return {label: homeStr.healthyWeight, color: 'limegreen'};
    } else if (bmi >= 25 && bmi < 30) {
        return {label: homeStr.overWeight, color: 'orange'};
    } else if (bmi >= 30 && bmi < 35) {
        return {label: homeStr.obese, color: 'coral'};
    } else if (bmi >= 35 && bmi < 40) {
        return {label: homeStr.severelyObese, color: 'tomato'};
    } else {
        return {label: homeStr.morbidlyObese, color: 'orangered'};
    }
};