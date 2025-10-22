// màu thương hiệu
import {padding} from "@/constants/specifications";
import {StyleSheet} from "react-native";

export const tintColor = 'forestgreen';
export const textOnTintColor = 'whitesmoke';
export const accentColor = 'dimgray';
export const warningColor = 'coral';
export const errorColor = 'orangered';

// màu của calo
export const goalColor = 'royalblue';
export const loadedColor = 'mediumaquamarine';
export const burnedColor = 'coral';

// màu của buổi
export const morningColor = 'sandybrown';
export const afternoonColor = 'tomato';
export const eveningColor = 'cornflowerblue';
export const snackColor = 'rosybrown';

// màu hạng mục
export const weightColor = 'mediumaquamarine';
export const exerciseVideoColor = 'crimson';
export const menuColor = 'peru';
export const articleColor = 'cornflowerblue';

export const Colors = {
    light: {
        text: 'black',
        background: 'whitesmoke',
        card: 'rgb(0,0,0,0.025)',
    },
    dark: {
        text: 'whitesmoke',
        background: 'black',
        card: 'rgb(255,255,255,0.025)',
    },
};

export const TextStyles = StyleSheet.create({
    title: {
        fontFamily: "heavy",
        fontSize: padding * 1.25,
        textAlign: "center",
    },
    subtitle: {
        fontFamily: "bold",
        fontSize: padding * 0.9,
        textAlign: "center",
    },
    paragraph: {
        fontFamily: "regular",
        fontSize: padding * 0.65,
        textAlign: "justify",
    },
    button: {
        fontFamily: "semibold",
        fontSize: padding * 0.75,
        textAlign: "center",
    },
    description: {
        fontFamily: "light",
        fontSize: padding * 0.6,
        textAlign: "justify",
    },
});