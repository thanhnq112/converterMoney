import { Text, Image } from 'react-native';


export default function Flag(props) {
    switch (props.unit) {
        case 'USD': {
            return <Image source = {require('../assets/usd.png')} />
        }
        case 'VND': {
            return <Image source = {require('../assets/vnd.png')} />
        }
        case 'RUB': {
            return <Image source = {require('../assets/rub.png')} />
        }
        case 'EUR': {
            return <Image source = {require('../assets/eur.png')} />
        }
    }

    // console.log(typeof(props.unit));
    // return (
    //     <Text>hello</Text>
    // )

    // return (
    //     <Image 
    //         style = {styles.flag}
    //         source = {require('../assets/`${}`.png')}
    //     />
        
    // );
  }
  
// const styles = StyleSheet.create({
//     wapperUnit: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     unit: {
        
//         height: 60,
//         width: 100,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     flag: {

//     }

// });