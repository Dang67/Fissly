import {StyleSheet, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import {countries_vi, isIOS, padding, textStyles} from "@/constants/theme";
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker';
import Button from "@/components/Button";
import {router} from "expo-router";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import FooterButtons from "@/app/information/components/FooterButtons";
import {strings} from "@/app/information/strings";

export default function CollectOtherInformationScreen() {
    const colors = useCustomColors();

    const [selectedCurrentResidence, setSelectedCurrentResidence] = useState('Việt Nam');
    const [gender, setGender] = useState<boolean>();
    const today = new Date();
    const maximumDate = new Date(
        today.getFullYear() - 16,
        today.getMonth(),
        today.getDate(),
    );
    const minimumDate = new Date(
        today.getFullYear() - 100,
        today.getMonth(),
        today.getDate(),
    )
    const [date, setDate] = useState(maximumDate);

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint}
                            text={strings.otherInfo.title}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent}
                            text={strings.otherInfo.des}/>
                <SpaceVertical/>
                <CustomText style={'button'} text={strings.otherInfo.subTitles.birthday}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                            mode={'date'}
                            locale={'vi'}
                            minimumDate={minimumDate}
                            maximumDate={today}
                        />
                    </View>
                </View>
                {
                    date > maximumDate ?
                        <CustomText style={'paragraph'} color={colors.error} text={strings.otherInfo.error}/> :
                        <>
                            <CustomText style={'button'} text={strings.otherInfo.subTitles.gender}/>
                            <SpaceVertical/>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1}}>
                                            <Button flex={1}
                                                    color={gender === true ? colors.tint : undefined}
                                                    label={strings.otherInfo.genderLabel.male}
                                                    labelColor={
                                                        gender === true ?
                                                            colors.textOnButton :
                                                            colors.textOnBackground}
                                                    onPress={() => setGender(true)}/>
                                        </View>
                                        <SpaceHorizontal/>
                                        <View style={{flex: 1}}>
                                            <Button flex={1}
                                                    color={gender === false ? colors.tint : undefined}
                                                    label={strings.otherInfo.genderLabel.female}
                                                    labelColor={
                                                        gender === false ?
                                                            colors.textOnButton :
                                                            colors.textOnBackground
                                                    }
                                                    onPress={() => setGender(false)}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {
                                gender !== undefined &&
                                <>
                                    <SpaceVertical/>
                                    <CustomText style={'button'} text={strings.otherInfo.subTitles.country}/>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Picker
                                                selectedValue={selectedCurrentResidence}
                                                onValueChange={(itemValue) =>
                                                    setSelectedCurrentResidence(itemValue)
                                                }
                                                style={{width: '100%'}}
                                                mode={'dropdown'}
                                            >
                                                {countries_vi.map((country, i) => (
                                                    <Picker.Item key={i} label={country} value={country}/>
                                                ))}
                                            </Picker>
                                        </View>
                                    </View>
                                </>
                            }
                        </>
                }
            </View>
            <FooterButtons
                backButton={true}
                showContinueButton={date <= maximumDate && gender !== undefined}
                onPressContinueButton={
                    () => router.push('/information/screens/CollectUserHealthGoalsScreen')
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: padding,
        paddingHorizontal: padding,
    },
    input: {
        ...textStyles.paragraph,
        textAlign: 'left',
    },
});