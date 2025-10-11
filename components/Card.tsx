import {PropsWithChildren, ReactNode} from "react";
import {borderRadius, isIOS, padding} from "@/constants/theme";
import {GlassView} from "expo-glass-effect";
import {StyleSheet, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {StyleProps} from "react-native-reanimated";

type Props = PropsWithChildren<{
    children?: ReactNode;
    style?: StyleProps;
    glassEffect?: boolean;
}>;

export default function Card({children, style, glassEffect}: Props) {
    const colors = useCustomColors();
    const dfGlassEffect = glassEffect ? 'clear' : 'regular';

    return (
        isIOS ?
            // cho ios
            <View style={styles.container}>
                <GlassView
                    style={{
                        ...styles.card,
                        ...style,
                    }}
                    glassEffectStyle={dfGlassEffect}
                    isInteractive={true}
                >
                    {children}
                </GlassView>
            </View> :

            // cho android
            <View style={styles.container}>
                <View style={{
                    ...styles.card,
                    ...style,
                    backgroundColor: colors.card,
                }}>
                    {children}
                </View>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        padding: padding,
        borderRadius: borderRadius,
    },
});