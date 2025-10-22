import {Dimensions, Platform} from "react-native";

// nền tảng
export const isIOS: boolean = Platform.OS === 'ios';

// thông số bố cục
export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;
export const padding: number = ((screenHeight + screenWidth) * 0.5) * 0.035;
export const smallPadding: number = padding * 0.5;
export const borderRadius: number = 55 - padding * 0.5;
export const borderRadiusChild: number = borderRadius - padding * 0.5;

// kích thước icon và logo
export const size = {
    bigLogo: ((screenWidth + screenWidth) / 2) * 0.6,
    logo: ((screenWidth + screenHeight) / 2) * 0.2,
    icon: isIOS ? padding * 0.87 : padding * 0.9,
    smallIcon: padding * 0.75,
    bigIcon: padding * 2.25,
    avatar: padding * 2,
};