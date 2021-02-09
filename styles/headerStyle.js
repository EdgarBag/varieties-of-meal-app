import { Platform } from 'react-native';
import colors from './../utils/colors'
export default {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}