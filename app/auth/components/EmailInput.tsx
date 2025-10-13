import {StyleSheet, TextInput, View} from "react-native";
import CustomText from "@/components/CustomText";
import {authStr} from "@/constants/strings/authStr";
import {isIOS, size, textStyles} from "@/constants/theme";
import SpaceVertical from "@/components/SpaceVertical";
import {Ionicons} from "@expo/vector-icons";
import {useCustomColors} from "@/hooks/useCustomColors";

type Props = {
    email: string;
    setEmail: (newEmail: string) => void;
};

export default function EmailInput({email, setEmail}: Props) {
    const colors = useCustomColors();

    return (
        <>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <CustomText style={'button'} text={authStr.email}/>
                </View>
            </View>
            {isIOS && <SpaceVertical/>}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                    style={{paddingEnd: 8}}
                    name={'mail'}
                    color={colors.textOnBackground}
                    size={size.icon}
                />
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{
                        ...styles.input,
                        color: colors.textOnBackground,
                    }}
                    placeholder={authStr.enterEmail}
                    keyboardType={'email-address'}
                    autoComplete={'email'}
                    clearButtonMode={'while-editing'}
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