import {StyleSheet, Text, TextStyle, TouchableOpacity} from "react-native";
import {PropsWithChildren} from "react";
import {useCustomColors} from "@/hooks/useCustomColors";
import {size, textStyles} from "@/constants/theme";
import {Ionicons} from "@expo/vector-icons";

type Props = PropsWithChildren<{
    style?: keyof typeof textStyles;
    textAlign?: TextStyle['textAlign'];
    color?: string;
    text?: string;
    lastIcon?: keyof typeof Ionicons.glyphMap;
    onPressIcon?: () => void;
}>;

export default function CustomText({text, textAlign, style, color, lastIcon, onPressIcon}: Props) {
    const colors = useCustomColors();
    const dfStyle = style ? style : 'paragraph';
    const dfTextAlign = textAlign ? textAlign : 'left';
    const dfColor = color ? color : colors.textOnBackground;
    const dfText = text ? text : 'This is Custom Text';
    const dfLastIcon = lastIcon && lastIcon;
    const iconSize = size.iconText;

    return (
        <Text style={{
            ...textStyles[dfStyle],
            textAlign: dfTextAlign,
            color: dfColor,
        }}>
            {dfText + `${lastIcon ? ' ' : ''}`}
            {
                lastIcon ?
                    <>
                        <TouchableOpacity style={styles.touchable} onPress={onPressIcon}>
                            <Ionicons name={dfLastIcon} color={dfColor} size={iconSize}/>
                        </TouchableOpacity>
                    </> :
                    ''
            }
        </Text>
    );
};

const styles = StyleSheet.create({
    touchable: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});