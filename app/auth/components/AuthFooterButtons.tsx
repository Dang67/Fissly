import {View} from "react-native";
import Button from "@/components/Button";
import {router} from "expo-router";
import {useCustomColors} from "@/hooks/useCustomColors";
import {authStr} from "@/constants/strings/authStr";
import SpaceVertical from "@/components/SpaceVertical";

type Props = {
    labelSubmitButton: string;
    onPressSubmitButton: () => void;
};

export default function AuthFooterButtons({labelSubmitButton, onPressSubmitButton}: Props) {
    const colors = useCustomColors();

    return (
        <View style={{flex: 1}}>
            <Button
                color={colors.tint}
                label={labelSubmitButton}
                labelColor={colors.textOnButton}
                onPress={onPressSubmitButton}
                flex={1}
            />
            <SpaceVertical/>
            <Button
                icon='logo-google'
                label={authStr.signInWithGG}
                labelColor={colors.textOnBackground}
                onPress={() => router.push('/(tabs)/home')}
                flex={1}
            />
            <SpaceVertical/>
            <Button
                icon='logo-facebook'
                label={authStr.signInWithFB}
                labelColor={colors.textOnBackground}
                onPress={() => router.push('/(tabs)/home')}
                flex={1}
            />
        </View>
    );
};