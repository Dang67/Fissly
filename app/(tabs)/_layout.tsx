import {BackHandler, StyleSheet, Text} from "react-native";
import {borderRadius, size} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import {Icon, Label, NativeTabs, VectorIcon} from "expo-router/unstable-native-tabs";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from "react-native-safe-area-context";
import {FontAwesome6, MaterialIcons} from "@expo/vector-icons";

export default function TabLayout() {
    const colors = useCustomColors();
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true;
            };

            const subscription = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => subscription.remove();
        }, [])
    );

    return (
        <NativeTabs
            labelVisibilityMode={'labeled'}
            minimizeBehavior={'onScrollDown'}
            tintColor={colors.tint}
            disableTransparentOnScrollEdge
            backBehavior={'none'}
        >
            <NativeTabs.Trigger
                name={'home'}
                disableScrollToTop={false}
                options={{title: 'Trang chủ',}}
            >
                <Icon src={<VectorIcon family={FontAwesome6} name='house'/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'daily'}
                disableScrollToTop={false}
                options={{title: 'Hàng ngày'}}
            >
                <Icon src={<VectorIcon family={FontAwesome6} name='calendar-day'/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'knowledge'}
                disableScrollToTop={false}
                options={{title: 'Khám phá'}}
            >
                <Icon src={<VectorIcon family={FontAwesome6} name='compass'/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'profile'}
                disableScrollToTop={false}
                options={{title: 'Hồ sơ'}}
            >
                <Icon src={<VectorIcon family={FontAwesome6} name='user-large'/>}/>
            </NativeTabs.Trigger>
        </NativeTabs>

        // <Tabs
        //     screenOptions={{
        //         headerTitleAlign: 'left',
        //         headerTitleStyle: [
        //             textStyles.title,
        //             {color: colors.textOnBackground},
        //         ],
        //         headerRight: (() => {
        //             return (
        //                 <View style={{flexDirection: 'row'}}>
        //                     <IconButton name='calendar-sharp'
        //                                 onPress={() => Alert.alert('Thông báo', 'Bạn đã nhấn vào nút lịch')}/>
        //                     <SpaceHorizontal/>
        //                     <IconButton name='notifications-sharp'
        //                                 onPress={() => Alert.alert('Thông báo', 'Bạn đã nhấn vào nút thông báo')}/>
        //                     <SpaceHorizontal/>
        //                 </View>
        //             );
        //         }),
        //         headerBackgroundContainerStyle: {
        //             backgroundColor: colors.tint
        //         },
        //         headerTintColor: colors.tint,
        //         tabBarActiveTintColor: colors.tint,
        //         tabBarLabelStyle: [
        //             textStyles.description,
        //         ],
        //     }}>
        //     <Tabs.Screen
        //         name="home"
        //         options={{
        //             headerLeft: (() => {
        //                 return (
        //                     <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
        //                         {Platform.OS === 'android' ? <SpaceVertical/> : null}
        //                         <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: padding / 2}}>
        //                             <Image source={imagesOnl.defaultAvatar} style={{...styles.avatar, backgroundColor: colors.textOnBackground}}/>
        //                         </View>
        //                     </TouchableOpacity>
        //                 );
        //             }),
        //             headerTitle: (() => {
        //                 return (
        //                     <View>
        //                         <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
        //                             <CustomText style='button' text='Xin chào USER!'/>
        //                         </TouchableOpacity>
        //                         <CustomText style='description' text='Thứ hai, ngày 1, tháng 1, năm 2001'/>
        //                     </View>
        //                 );
        //             }),
        //             tabBarLabel: 'Trang chủ',
        //             tabBarIcon: ({color, focused, size}) => {
        //                 return (
        //                     focused ?
        //                         <Ionicons
        //                             name='home-sharp'
        //                             color={color}
        //                             size={size}/> :
        //                         <Ionicons
        //                             name='home-outline'
        //                             color={color}
        //                             size={size}/>
        //                 );
        //             },
        //         }}
        //     />
        //     <Tabs.Screen
        //         name="daily"
        //         options={{
        //             title: 'Hàng ngày',
        //             tabBarIcon: ({color, focused, size}) => {
        //                 return (
        //                     focused ?
        //                         <Ionicons
        //                             name='book-sharp'
        //                             color={color}
        //                             size={size}/> :
        //                         <Ionicons
        //                             name='book-outline'
        //                             color={color}
        //                             size={size}/>
        //                 );
        //             }
        //         }}
        //     />
        //     <Tabs.Screen
        //         name="knowlegde"
        //         options={{
        //             title: 'Khám phá',
        //             tabBarIcon: ({color, focused, size}) => {
        //                 return (
        //                     focused ?
        //                         <Ionicons
        //                             name='layers-sharp'
        //                             color={color}
        //                             size={size}/> :
        //                         <Ionicons
        //                             name='layers-outline'
        //                             color={color}
        //                             size={size}/>
        //                 );
        //             }
        //         }}
        //     />
        //     <Tabs.Screen
        //         name="profile"
        //         options={{
        //             title: 'Hồ sơ',
        //             tabBarIcon: ({color, focused, size}) => {
        //                 return (
        //                     focused ?
        //                         <Ionicons
        //                             name='person-sharp'
        //                             color={color}
        //                             size={size}/> :
        //                         <Ionicons
        //                             name='person-outline'
        //                             color={color}
        //                             size={size}/>
        //                 );
        //             }
        //         }}
        //     />
        // </Tabs>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: size.avatar,
        height: size.avatar,
        borderRadius: borderRadius,
    },
});