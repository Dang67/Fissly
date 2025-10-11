import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {borderRadius, colors, isIOS, padding, size} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import {GlassView} from "expo-glass-effect";

type Props = {
    name: keyof typeof Ionicons.glyphMap;
    color?: string;
    onPress: () => void;
};

export default function IconButton({name, color, onPress}: Props) {
    const colors = useCustomColors();
    const dfColor = color ? color : colors.tint;
    const iconSize = size.icon;

    return (
        isIOS ?
            // nút icon cho ios
            <GlassView
                style={{borderRadius: borderRadius}}
                glassEffectStyle='clear'
                isInteractive={true}
            >
                <TouchableOpacity style={styles.touchable} onPress={onPress}>
                    <Ionicons name={name} color={dfColor} size={iconSize}/>
                </TouchableOpacity>
            </GlassView> :

            // nút icon cho android
            <TouchableOpacity
                style={{
                    ...styles.touchable,
                    backgroundColor: colors.card,
                    borderRadius: borderRadius,
                }}
                onPress={onPress}
            >
                <Ionicons name={name} color={dfColor} size={iconSize}/>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        padding: padding / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});