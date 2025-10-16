import {Dimensions, Platform, StyleSheet} from "react-native";

// màu ứng dụng
const tintColor = 'forestgreen';
const accentColor = 'darkgrey';
const warningColor = 'coral';
const errorColor = 'orangered';

// màu của calo
const goalColor = 'royalblue';
const loadedColor = 'mediumaquamarine';
const burnedColor = 'coral';

// màu của buổi
const morningColor = 'sandybrown';
const afternoonColor = 'tomato';
const eveningColor = 'cornflowerblue';
const snackColor = 'rosybrown';

export type ColorTheme = {
    textOnBackground: string;
    textOnButton: string;
    background: string;
    textOnBlur: string;
    tint: string;
    accent: string;
    warning: string;
    error: string;
    card: string;
    goal: string;
    loaded: string;
    burned: string;
    morning: string;
    afternoon: string;
    evening: string;
    snack: string;
};

export const colors: { light: ColorTheme; dark: ColorTheme } = {
    light: {
        textOnBackground: 'darkslategray',
        textOnButton: 'snow',
        background: 'whitesmoke',
        textOnBlur: 'black',
        tint: tintColor,
        accent: accentColor,
        warning: warningColor,
        error: errorColor,
        card: 'rgba(255,255,255,0.8)',
        goal: goalColor,
        loaded: loadedColor,
        burned: burnedColor,
        morning: morningColor,
        afternoon: afternoonColor,
        evening: eveningColor,
        snack: snackColor,
    },
    dark: {
        textOnBackground: 'snow',
        textOnButton: 'snow',
        background: 'black',
        textOnBlur: 'white',
        tint: tintColor,
        accent: accentColor,
        warning: warningColor,
        error: errorColor,
        card: 'rgb(25,25,25,0.8)',
        goal: goalColor,
        loaded: loadedColor,
        burned: burnedColor,
        morning: morningColor,
        afternoon: afternoonColor,
        evening: eveningColor,
        snack: snackColor,
    },
};

// phong cách các kiểu chữ
export const textStyles = StyleSheet.create({
    title: {
        fontFamily: "bold",
        fontSize: 24,
    },
    paragraph: {
        fontFamily: "regular",
        fontSize: 16,
        textAlign: 'justify',
    },
    button: {
        fontFamily: "medium",
        fontSize: 18,
    },
    description: {
        fontFamily: "light",
        fontSize: 12,
        textAlign: 'justify',
    },
});

// nền tảng
export const isIOS = Platform.OS === 'ios';


// các thông số kỹ thuật
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const padding = ((screenHeight + screenWidth) * 0.5) * 0.035;
export const space = padding * 0.55;
export const borderRadius = 55 - (padding / 2);
export const borderRadiusChild = borderRadius - (padding * 0.5);

// kích thước icon và logo
export const size = {
    bigLogo: ((screenWidth + screenWidth) / 2) * 0.6,
    logo: ((screenWidth + screenHeight) / 2) * 0.2,
    icon: isIOS ? 22 : 26,
    iconButton: 24,
    avatar: 44,
    iconText: 14,
    bigIcon: 48,
};

// đường dẫn source ảnh local
export const imagesLocal = {
    icon: require('@/assets/images/icon.png'),
    // defaultAvatar: require('@/assets/images/icon.png')
};

// đường dẫn source ảnh online
export const onboardingBackground = [
    {uri: 'https://i.pinimg.com/736x/6b/5a/3e/6b5a3e8a11986ed21b7b5c38cddf0c45.jpg'},
    {uri: 'https://i.pinimg.com/736x/e8/14/34/e81434c05c3f28629546a8995c4faff7.jpg'},
    {uri: 'https://i.pinimg.com/736x/40/3e/ef/403eef5689cce38dab70baeba696566b.jpg'},
];
export const imagesOnl = {
    defaultAvatar: {uri: 'https://i.pinimg.com/736x/47/1c/25/471c255c41f81526e3b0092fba3adad7.jpg'},
};

// tên quốc gia
export const countries_vi = [
    "Afghanistan",
    "Ai Cập",
    "Ailen",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anh",
    "Antigua và Barbuda",
    "Ả Rập Xê Út",
    "Argentina",
    "Armenia",
    "Azerbaijan",
    "Ấn Độ",
    "Áo",
    "Ba Lan",
    "Bắc Macedonia",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Bỉ",
    "Belize",
    "Benin",
    "Bhutan",
    "Bờ Biển Ngà",
    "Bolivia",
    "Bosnia và Herzegovina",
    "Botswana",
    "Bồ Đào Nha",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Các Tiểu vương quốc Ả Rập Thống nhất",
    "Cameroon",
    "Campuchia",
    "Canada",
    "Cape Verde",
    "Chad",
    "Chile",
    "Colombia",
    "Comoros",
    "Cộng hòa Congo",
    "Cộng hòa Dân chủ Congo",
    "Cộng hòa Dominica",
    "Cộng hòa Séc",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Djibouti",
    "Dominica",
    "Đan Mạch",
    "Đông Timor",
    "Đức",
    "Ecuador",
    "El Salvador",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Gabon",
    "Gambia",
    "Georgia",
    "Ghana",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Xích đạo",
    "Guinea-Bissau",
    "Guyana",
    "Hà Lan",
    "Haiti",
    "Hàn Quốc",
    "Hoa Kỳ",
    "Honduras",
    "Hungary",
    "Hy Lạp",
    "Iceland",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Jamaica",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Lào",
    "Latvia",
    "Lesotho",
    "Liban",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Litva",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Maroc",
    "Marshall",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mông Cổ",
    "Montenegro",
    "Mozambique",
    "Myanmar (Miến Điện)",
    "Nam Phi",
    "Nam Sudan",
    "Namibia",
    "Nauru",
    "Nepal",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Na Uy",
    "Nhật Bản",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Phần Lan",
    "Pháp",
    "Philippines",
    "Qatar",
    "Romania",
    "Rwanda",
    "Saint Kitts và Nevis",
    "Saint Lucia",
    "Saint Vincent và Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé và Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Síp",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Tây Ban Nha",
    "Thái Lan",
    "Thổ Nhĩ Kỳ",
    "Thụy Điển",
    "Thụy Sĩ",
    "Togo",
    "Tonga",
    "Trinidad và Tobago",
    "Trung Quốc",
    "Tunisia",
    "Turkmenistan",
    "Tuvalu",
    "Úc",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican",
    "Venezuela",
    "Việt Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

