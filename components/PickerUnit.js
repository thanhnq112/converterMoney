import { StyleSheet, Text, Picker, View, Image } from 'react-native';


export default function PickerUnit(props) {

    return (
        <View style = {styles.wapperUnit}>
            <Picker
                selectedValue={props.unit}
                style = {styles.unit}
                onValueChange={(itemValue, itemIndex) => props.setUnit(itemValue)}
            >
                <Picker.Item label="VND" value="VND" />
                <Picker.Item label="RUB" value="RUB" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
            </Picker>
            {/* <Image 
                style = {styles.flag}
                source = {require('../assets/`${}`.png')}
            /> */}
        </View>
        
    );
  }
  
const styles = StyleSheet.create({
    wapperUnit: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    unit: {
        
        height: 60,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {

    }

});