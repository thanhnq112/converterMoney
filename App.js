import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import PickerUnit from './components/PickerUnit';
import Flag from './components/Flag';
import data from './components/Data';


export default function App() {
  const [sourceUnit, setSourceUnit] = useState('USD');
  const [receiverUnit, setReceiverUnit] = useState('VND');
  const [sourceNum, setSourceNum] = useState(null);
  const [exchange, setExchange] = useState(23000)
  // const [filePath, setFilePath] = useState('./assets/vnd.png');
  
  // let filePath = './assets/' + sourceUnit.toLowerCase() + '.png'
  // console.log(typeof(filePath));
  

  useEffect(() => {
    const dataSource = data.find(element => element.unit == sourceUnit)
    const dataReceiver = data.find(element => element.unit == receiverUnit)
    const dataExchange = dataReceiver.value/dataSource.value;
    setExchange(dataExchange.toFixed(2));
  }, [sourceUnit, receiverUnit, sourceNum])


  // console.log(sourceUnit + ' to ' + receiverUnit);
  // console.log(typeof(sourceUnit));
  // console.log(data);

  // let dataSource = data.find(element => element.unit == sourceUnit)
  // console.log(dataSource.value);
  // console.log(sourceNum);
  // console.log(exchange);
  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Конвертер валют</Text>
        <Image source={require('./assets/money.png')}/>
      </View>
      


      {/* SOURCE */}
      <View style={styles.source}>
        <View style={styles.sourceInput}>
          <TextInput 
            keyboardType = 'numeric'
            style={styles.textInput}
            onChangeText = {(text)=> setSourceNum(text)}
            value = {sourceNum}
          />
        </View>
        <View style={styles.sourceUnit}>
          <PickerUnit unit = {sourceUnit} setUnit = {setSourceUnit}/>
          
          <Flag unit = {sourceUnit} style = {styles.flag}/>
          {/* <Image 
            style = {styles.flag}
            source = {require('./assets/vnd.png')}
          /> */}
        </View>
      </View>



      {/* EXCHANGE */}
      <View style={styles.exchangeRate}>
        <Text style={styles.exchangeText}>1 {sourceUnit} = {exchange} {receiverUnit}</Text>
      </View>

      
      
      {/* RECEIVER */}
      <View style={styles.receiver}>
        {/* <InputMoney /> */}
        <View style={styles.receiverOutput}>
          <Text style={styles.receiverResult}>{sourceNum*exchange}</Text>
        </View>
        <View style={styles.receiverUnit}>
          <PickerUnit unit = {receiverUnit} setUnit = {setReceiverUnit}/>
          <Flag unit = {receiverUnit} style = {styles.flag}/>
        </View>
      </View>
      


      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          © Designed by Nguyen Quy Thanh from Vietnam
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // height: '80%'
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  empty: {
    flex: 2,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  source: {
    flex: 3,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  exchangeRate: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exchangeSubmit: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiver: {
    flex: 3,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footer: {
    flex: 0.5,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10
  },

  //-----------SOURCE -------------
  sourceInput: {
    flex: 1,
    // backgroundColor: 'pink',
    // flexDirection: 'row',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 2
  },
  sourceUnit: {
    flex: 1,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    height: 50,
    // paddingRight: 20,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    fontSize: 24,
  },
  flag: {
    paddingRight: 20,
    width: 20
  },



  //----------RECEIVER---------------
  receiverOutput: {
    flex: 1,
    // backgroundColor: 'pink',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  receiverUnit: {
    flex: 1,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    height: 50,
    // paddingRight: 20,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiverResult: {
    fontSize: 24,
  },

  //-----------EXCHANGE-------------
  exchangeText: {
    fontSize: 16,
    color: '#333'
  }
});
