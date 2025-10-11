import {Dimensions, Platform, StyleSheet} from "react-native";

// màu ứng dụng
const tintColor = 'rgb(0,106,58)';
const accentColor = 'rgb(122,122,122)';

export type ColorTheme = {
    textOnBackground: string;
    textOnButton: string;
    background: string;
    tint: string;
    accent: string;
    card: string;
};

export const colors: { light: ColorTheme; dark: ColorTheme } = {
    light: {
        textOnBackground: 'rgb(0,0,0)',
        textOnButton: 'rgb(255,255,255)',
        background: 'rgb(242,242,246)',
        tint: tintColor,
        accent: accentColor,
        card: 'rgba(255,255,255,0.8)',
    },
    dark: {
        textOnBackground: 'rgb(255,255,255)',
        textOnButton: 'rgb(255,255,255)',
        background: 'rgb(0,0,0)',
        tint: tintColor,
        accent: accentColor,
        card: 'rgba(0,0,0,0.8)',
    },
};

// phong cách các kiểu chữ
export const textStyles = StyleSheet.create({
    title: {
        fontFamily: "bold",
        fontSize: 24,
        letterSpacing: 1,
    },
    paragraph: {
        fontFamily: "regular",
        fontSize: 16,
        letterSpacing: 1,
    },
    button: {
        fontFamily: "medium",
        fontSize: 18,
        letterSpacing: 1,
    },
    description: {
        fontFamily: "light",
        fontSize: 12,
        letterSpacing: 1,
    },
});

// nền tảng
export const isIOS = Platform.OS === 'ios';


// các thông số kỹ thuật
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const padding = ((screenHeight + screenWidth) / 2) * 0.04;
export const borderRadius = 50 - (padding / 2);
export const borderRadiusChild = borderRadius - (padding / 2);

// kích thước icon và logo
export const size = {
    logo: ((screenWidth + screenHeight) / 2) * 0.3,
    icon: 20,
    iconButton: 24,
    avatar: 32,
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

