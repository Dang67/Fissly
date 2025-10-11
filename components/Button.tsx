import {borderRadius, isIOS, padding, size} from "@/constants/theme";
import {Animated, StyleSheet, TouchableOpacity} from "react-native";
import CustomText from "@/components/CustomText";
import {useCustomColors} from "@/hooks/useCustomColors";
import {GlassView} from "expo-glass-effect";
import {Ionicons} from "@expo/vector-icons";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import View = Animated.View;

type Props = {
    icon?: keyof typeof Ionicons.glyphMap;
    iconColor?: string;
    label: string;
    labelColor?: string;
    flex?: number;
    borderRadiusCustom?: number;
    color?: string;
    onPress: () => void;
};

export default function Button({
                                   icon,
                                   iconColor,
                                   label,
                                   labelColor,
                                   flex,
                                   borderRadiusCustom,
                                   color,
                                   onPress
                               }: Props) {
    const colors = useCustomColors();
    const dfIcon = icon ? icon : 'ellipsis-horizontal-outline';
    const iconSize = size.icon;
    const dfLabelColor = labelColor ? labelColor : colors.textOnBackground;
    const dfFlex = flex ? flex : 0;
    const dfBorderRadius = borderRadiusCustom ? borderRadiusCustom : borderRadius;
    const dfColor = color && color;
    const styleCustomText = 'button';

    return (
        <View style={styles.container}>
            {isIOS ?
                // nút cho ios
                <TouchableOpacity style={{
                    ...styles.button,
                    borderRadius: dfBorderRadius,
                    flex: dfFlex,
                }} onPress={onPress}>
                    <GlassView
                        style={{
                            ...styles.touchable,
                            borderRadius: dfBorderRadius,
                            flex: dfFlex,
                        }}
                        tintColor={dfColor}
                        isInteractive={true}
                    >
                        <View style={styles.spaceInTouchable}>
                            {icon && <Ionicons name={dfIcon} color={dfLabelColor} size={iconSize}/>}
                            {icon && <SpaceHorizontal/>}
                            <CustomText style={styleCustomText} color={dfLabelColor} text={label}/>
                        </View>
                    </GlassView>
                </TouchableOpacity> :

                // nút cho android
                <TouchableOpacity
                    style={{
                        ...styles.button,
                        padding: padding / 4,
                        flex: dfFlex,
                        borderRadius: dfBorderRadius,
                        backgroundColor: color ? color : colors.card,
                    }}
                    onPress={onPress}
                >
                    <View style={styles.spaceInTouchable}>
                        {icon && <Ionicons name={dfIcon} color={dfLabelColor} size={iconSize}/>}
                        {icon && <SpaceHorizontal/>}
                        <CustomText style={styleCustomText} color={dfLabelColor} text={label}/>
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        padding: padding / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceInTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});