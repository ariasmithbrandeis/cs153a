import React,{useState} from 'react';
import {View,Text} from 'react-native';

import NamedCounter from './NamedCounter';


export default function App() {
    const [total,setTotal] = useState(0);
    const [coin, setCoin] = useState(0);
    const updateTotal = (v) => setTotal(v+total);
    const updateCoin = () => setCoin(coin + 1);
  return (
    <View>
      <Text>New Named Counter Demo</Text>
      <Text> total value is {total} cents</Text>
      <View style={{flexDirection:'row'}}>
        <NamedCounter  label="penny" value={1} updateTotal={updateTotal} updateCoin={updateCoin}/>
        <NamedCounter  label="nickel" value={5} updateTotal={updateTotal} updateCoin={updateCoin}/>
        <NamedCounter  label="dime" value={10} updateTotal={updateTotal} updateCoin={updateCoin}/>
        <NamedCounter  label="quarter" value={25} updateTotal={updateTotal} updateCoin={updateCoin}/>
      </View>
    </View>
    
  );
}

