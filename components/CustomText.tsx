import {Text} from "react-native";
import {PropsWithChildren} from "react";
import {useCustomColors} from "@/hooks/useCustomColors";
import {textStyles} from "@/constants/theme";

type Props = PropsWithChildren<{
    style?: keyof typeof textStyles;
    color?: string;
    text?: string;
}>;

export default function CustomText({text, style, color}: Props) {
    const colors = useCustomColors();
    const dfStyle = style ? style : 'paragraph';
    const dfColor = color ? color : colors.textOnBackground;
    const dfText = text ? text : 'This is Custom Text';

    return (
        <Text style={{
            ...textStyles[dfStyle],
            color: dfColor,
        }}>
            {dfText}
        </Text>
    );
};