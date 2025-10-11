import {StyleSheet, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import {countries_vi, padding, textStyles} from "@/constants/theme";
import DatePicker from 'react-native-date-picker'
import {Picker} from '@react-native-picker/picker';
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import SpaceHorizontal from "@/components/SpaceHorizontal";

export default function CollectOtherInformationScreen() {
    const colors = useCustomColors();

    const [selectedCurrentResidence, setSelectedCurrentResidence] = useState('Việt Nam');
    const [gender, setGender] = useState('');
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
                            text={'Hãy cho tôi biết một chút về bản thân của bạn nhé!'}/>
                <CustomText style={'paragraph'} color={colors.accent}
                            text={'Các thông tin dưới đây rất hữu ích cho việc tính toán lượng calo cho bạn.'}/>
                <SpaceVertical/>
                <CustomText style={'button'} text={'Ngày tháng năm sinh của bạn là:'}/>
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
                        <CustomText style={'paragraph'} color={'red'}
                                    text={'Fissly rất tiếc vì bạn chưa đủ 16 tuổi trở lên để sử dụng ứng dụng này!'}/> :
                        <>
                            <CustomText style={'button'} text={'Giới tính:'}/>
                            <SpaceVertical/>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1}}>
                                            <Button flex={1} color={gender === 'male' ? colors.tint : colors.card}
                                                    label={'Nam'}
                                                    labelColor={gender === 'male' ? colors.textOnButton : colors.textOnBackground}
                                                    onPress={() => setGender('male')}/>
                                        </View>
                                        <SpaceHorizontal/>
                                        <View style={{flex: 1}}>
                                            <Button flex={1} color={gender === 'female' ? colors.tint : colors.card}
                                                    label={'Nữ'}
                                                    labelColor={gender === 'female' ? colors.textOnButton : colors.textOnBackground}
                                                    onPress={() => setGender('female')}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {
                                gender !== '' &&
                                <>
                                    <SpaceVertical/>
                                    <CustomText style={'button'} text={'Quốc gia bạn sinh sống:'}/>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <Picker
                                                selectedValue={selectedCurrentResidence}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedCurrentResidence(itemValue)
                                                }
                                                style={{width: '100%'}}
                                                mode={'dialog'}
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

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton name='arrow-back' color={colors.textOnBackground} onPress={() => router.back()}/>
                {
                    (date <= maximumDate && gender !== '') &&
                    <>
                        <SpaceHorizontal/>
                        <View style={{flex: 1}}>
                            <Button
                                label={'Tiếp tục'}
                                flex={1}
                                onPress={() => router}
                            />
                        </View>
                    </>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:
            'space-between',
        paddingTop:
        padding,
        paddingHorizontal:
        padding,
    }
    ,
    input: {
        ...
            textStyles.paragraph,
        textAlign:
            'left',
    }
    ,
});