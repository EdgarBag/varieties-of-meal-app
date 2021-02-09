import * as Font from 'expo-font'

export default fetchFont = () => {
    return Font.loadAsync({
        'caviar_d_bold': require('./../assets/fonts/Caviar_Dreams_Bold.ttf'),
        'caviar_d_italic': require('./../assets/fonts/CaviarDreams_Italic.ttf'),
        'caviar_d_regular': require('./../assets/fonts/CaviarDreams.ttf'),
    })
}

