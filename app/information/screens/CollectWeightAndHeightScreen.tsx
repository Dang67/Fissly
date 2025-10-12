import {SafeAreaView} from "react-native-safe-area-context";
import {Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {isIOS, padding, textStyles} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import Button from "@/components/Button";
import Card from "@/components/Card";
import convertFtToCm, {convertCmToFt, convertKgToLb, convertLbToKg} from "@/app/information/functions/unitConversion";
import getBmi, {getBmiInfo} from "@/app/information/functions/getBmi";
import FooterButtons from "@/app/information/components/FooterButtons";
import {router, useLocalSearchParams} from "expo-router";
import {strings} from "@/app/information/strings";

export default function CollectWeightAndHeightScreen() {
    const colors = useCustomColors();
    const { goal } = useLocalSearchParams();
    const parsedGoal = goal ? JSON.parse(goal as string) : null;

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState<string>(strings.weightAndHeight.unit.height.cm);
    const [toggleHeight, setToggleHeight] = useState<boolean>(true);
    const [weightUnit, setWeightUnit] = useState<string>(strings.weightAndHeight.unit.weight.kg);
    const [toggleWeight, setToggleWeight] = useState<boolean>(true);

    const heightNum = heightUnit === strings.weightAndHeight.unit.height.cm ?
        parseFloat(height) :
        convertFtToCm(parseFloat(height));
    const weightNum = weightUnit === strings.weightAndHeight.unit.weight.kg ?
        parseFloat(weight) :
        convertLbToKg(parseFloat(weight));
    const bmi = height && weight ? getBmi(heightNum, weightNum) : -1;
    const {text: bmiDes, color: bmiColor} = getBmiInfo(bmi);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
                <View>
                    <CustomText style={'title'} color={colors.tint} text={strings.weightAndHeight.title}/>
                    {isIOS && <SpaceVertical/>}
                    <CustomText style={'paragraph'} color={colors.accent} text={strings.weightAndHeight.des}/>
                    <SpaceVertical/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 3}}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    color: colors.textOnBackground,
                                }}
                                keyboardType={'numeric'}
                                placeholder={strings.weightAndHeight.input.height}
                                value={height}
                                onChangeText={setHeight}
                                clearButtonMode={'while-editing'}
                            />
                        </View>
                        <View style={{flex: 2}}>
                            {
                                isIOS ?
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            heightUnit === strings.weightAndHeight.unit.height.cm ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={strings.weightAndHeight.unit.height.cm}
                                                        labelColor={
                                                            heightUnit === strings.weightAndHeight.unit.height.cm ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setHeightUnit(strings.weightAndHeight.unit.height.cm);
                                                            setToggleHeight(true);
                                                            setHeight(
                                                                !toggleHeight ? (
                                                                    height ?
                                                                        convertFtToCm(parseFloat(height)).toString() :
                                                                        ''
                                                                ) : height
                                                            );
                                                        }}
                                                    />
                                                </View>
                                                <View style={{width: padding / 4}}/>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            heightUnit === strings.weightAndHeight.unit.height.ft ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={strings.weightAndHeight.unit.height.ft}
                                                        labelColor={
                                                            heightUnit === strings.weightAndHeight.unit.height.ft ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setHeightUnit(strings.weightAndHeight.unit.height.ft);
                                                            setToggleHeight(false);
                                                            setHeight(
                                                                toggleHeight ? (
                                                                    height ?
                                                                        convertCmToFt(parseFloat(height)).toString() :
                                                                        ''
                                                                ) : height
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <Picker
                                        style={{width: '100%'}}
                                        selectedValue={heightUnit}
                                        onValueChange={(value) => {
                                            setHeightUnit(value)
                                            if (value === strings.weightAndHeight.unit.height.cm) {
                                                setToggleHeight(true);
                                                setHeight(
                                                    !toggleHeight ?
                                                        (height ? convertFtToCm(parseFloat(height)).toString() : '') :
                                                        height
                                                );
                                            } else {
                                                setToggleHeight(false);
                                                setHeight(
                                                    toggleHeight ?
                                                        (height ? convertCmToFt(parseFloat(height)).toString() : '') :
                                                        height
                                                );
                                            }
                                        }}
                                        mode={'dropdown'}
                                    >
                                        <Picker.Item
                                            label={strings.weightAndHeight.unit.height.cm}
                                            value={strings.weightAndHeight.unit.height.cm}
                                        />
                                        <Picker.Item
                                            label={strings.weightAndHeight.unit.height.ft}
                                            value={strings.weightAndHeight.unit.height.ft}
                                        />
                                    </Picker>
                            }
                        </View>
                    </View>
                    {isIOS && <SpaceVertical/>}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 3}}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    color: colors.textOnBackground,
                                }}
                                keyboardType={'numeric'}
                                placeholder={strings.weightAndHeight.input.weight}
                                value={weight}
                                onChangeText={setWeight}
                                clearButtonMode={'while-editing'}
                            />
                        </View>
                        <View style={{flex: 2}}>
                            {
                                isIOS ?
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            weightUnit === strings.weightAndHeight.unit.weight.kg ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={strings.weightAndHeight.unit.weight.kg}
                                                        labelColor={
                                                            weightUnit === strings.weightAndHeight.unit.weight.kg ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setWeightUnit(strings.weightAndHeight.unit.weight.kg);
                                                            setToggleWeight(true);
                                                            setWeight(
                                                                !toggleWeight ? (
                                                                        weight ?
                                                                            convertLbToKg(parseFloat(weight)).toString() :
                                                                            ''
                                                                    ) :
                                                                    weight
                                                            );
                                                        }}
                                                    />
                                                </View>
                                                <View style={{width: padding / 4}}/>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            weightUnit === strings.weightAndHeight.unit.weight.lb ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={strings.weightAndHeight.unit.weight.lb}
                                                        labelColor={
                                                            weightUnit === strings.weightAndHeight.unit.weight.lb ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setWeightUnit(strings.weightAndHeight.unit.weight.lb);
                                                            setToggleWeight(false);
                                                            setWeight(
                                                                toggleWeight ? (
                                                                        weight ? convertKgToLb(parseFloat(weight)).toString() :
                                                                            ''
                                                                    ) :
                                                                    weight
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <Picker
                                        style={{width: '100%'}}
                                        selectedValue={weightUnit}
                                        onValueChange={(value) => {
                                            setWeightUnit(value)
                                            if (value === strings.weightAndHeight.unit.weight.kg) {
                                                setToggleWeight(true);
                                                setWeight(
                                                    !toggleWeight ?
                                                        (weight ? convertLbToKg(parseFloat(weight)).toString() : '') :
                                                        weight
                                                );
                                            } else {
                                                setToggleWeight(false);
                                                setWeight(
                                                    toggleWeight ?
                                                        (weight ? convertKgToLb(parseFloat(weight)).toString() : '') :
                                                        weight
                                                );
                                            }
                                        }}
                                        mode={'dropdown'}
                                    >
                                        <Picker.Item
                                            label={strings.weightAndHeight.unit.weight.kg}
                                            value={strings.weightAndHeight.unit.weight.kg}
                                        />
                                        <Picker.Item
                                            label={strings.weightAndHeight.unit.weight.lb}
                                            value={strings.weightAndHeight.unit.weight.lb}
                                        />
                                    </Picker>
                            }
                        </View>
                    </View>
                    <SpaceVertical/>
                    {
                        bmi !== -1 &&
                        <Card>
                            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                                <CustomText style={'button'} text={strings.weightAndHeight.bmiCard.title}/>
                                <CustomText
                                    style={'title'}
                                    color={bmiColor}
                                    text={`${bmi}`}/>
                            </View>
                            {isIOS && <SpaceVertical/>}
                            <CustomText style={'paragraph'} text={bmiDes}/>
                        </Card>
                    }
                </View>
                <FooterButtons
                    backButton={true}
                    showContinueButton={height !== '' && weight !== ''}
                    onPressContinueButton={
                        () => router.push({
                            pathname: '/information/screens/CollectWeeklyGoalScreen',
                            params: {goal: JSON.stringify(parsedGoal)},
                        })
                    }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
        ...textStyles.title,
        textAlign: 'left',
    },
});