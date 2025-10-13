import {StyleSheet, TextInput, View} from "react-native";
import CustomText from "@/components/CustomText";
import {authStr} from "@/constants/strings/authStr";
import {isIOS, size, textStyles} from "@/constants/theme";
import SpaceVertical from "@/components/SpaceVertical";
import {Ionicons} from "@expo/vector-icons";
import {useCustomColors} from "@/hooks/useCustomColors";

type Props = {
    title: string,
    placeholder: string,
    password: string,
    setPassword: (newPassword: string) => void,
};

export default function PasswordInput({ title, placeholder, password, setPassword }: Props) {
    const colors = useCustomColors();

    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <CustomText style={'button'} text={title}/>
                </View>
            </View>
            {isIOS && <SpaceVertical/>}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                    style={{paddingEnd: 8}}
                    name='lock-closed'
                    color={colors.textOnBackground}
                    size={size.icon}
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{
                        ...styles.input,
                        color: colors.textOnBackground,
                    }}
                    placeholder={placeholder}
                    autoComplete='new-password'
                    clearButtonMode='while-editing'
                    clearTextOnFocus={true}
                    disableKeyboardShortcuts={true}
                    secureTextEntry={true}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        ...textStyles.paragraph,
        flex: 1,
        textAlign: 'left',
    },
});