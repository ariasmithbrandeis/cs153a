import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native'; 
import {useValue} from './ValueStorageContext';
import {sendFeedback} from './Feedback';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {
  const {currentValue,setCurrentValue} = useValue();
  const [fName,setfName] = useState(currentValue.fName);
  const [lName,setlName] = useState(currentValue.lName);
  const [email,setEmail] = useState(currentValue.email);
  const [feedback,setFeedback] = useState("");

  const createFeedback = () => {
    setFeedback("{fName: " + fName + ", lName: " + lName + " ,email: " + email);
  }

  useEffect(()=> {
    setfName(currentValue.fName);
    setlName(currentValue.lName);
    setEmail(currentValue.email);
  },
  [currentValue]);

    return (
        <View style = {styles.container}>
            <View style={styles.labelContainer}>
                <Text style = {styles.title}>
                    Artist Portfolio Helper
                </Text>
                <Text style={styles.subTitle}>
                    Welcome Back, {currentValue.fName}!
                </Text>
                <Text style={styles.paragraph}>
                    ~~~~~~~~~~~~~~~~
                </Text>
                <Text style={styles.paragraph}>
                    I you are not {currentValue.fName}, simply
                    fill out the form below to
                </Text>

                <Text style={styles.subTitle}>
                    Get Started!
                </Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputElements}>
              <Text style={{fontWeight:'800'}}>First Name: </Text>
                <TextInput
                    style={{backgroundColor:"#FFB6C1"}}
                    onChangeText = {(text)=>setfName(text)} 
                    value={fName}
                />
              </View>
              <View style={styles.inputElements}>
                <Text style={{fontWeight:'800'}}>Last Name: </Text>
                <TextInput
                    style={{backgroundColor:'#4287f5'}}
                    onChangeText = {(text)=>setlName(text)} 
                    value={lName}
                />
              </View>
              <View style={styles.inputElements}>
                <Text style={{fontWeight:'800'}}>EMAIL: </Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setEmail(text)} 
                    value={email}
                />
              </View>

              <Button
                    title="Get Started"
                    style={{fontSize:20, padding:10, marginTop: 5}}
                    onPress = {() => {
                        console.log('saving...');
                        setCurrentValue({fName,lName,email})
                        // sendFeedback(createFeedback());
                        setFeedback("")}}
                    >
                </Button>
                <View style={styles.labelContainer}>
                  <Text style = {styles.subTitle}>
                      Do you like our app?
                  </Text>  
                  <Text style = {styles.subTitle}>
                      Tell us so! We would love to hear from you!
                  </Text>  

                  <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity
                        title="send feedback"
                        style={{fontSize:10}}
                        onPress = {() => {
                            console.log('sending feedback....');
                            sendFeedback(feedback);
                            setFeedback("")}}
                        >
                        <Text>send feedback</Text>
                    </TouchableOpacity>
                </View>
                  <TextInput multiline
                    numberOfLines={3}
                    placeholder="feedback"
                    style={{backgroundColor:'yellow'}}
                    onChangeText = {(text) => setFeedback(text)}
                    value={feedback} />
                  </View>

            </View>
        </View>

        
    );
}


const styles = StyleSheet.create({


    container: {
      flexDirection: 'column',
      flex:1,
      alignItems: 'center',
  
    },
  
    labelContainer: {
      alignItems: 'center',
      justifyContent: 'top',
  
    },

    inputContainer: {
      alignItems: 'center',
      justifyContent: 'top',
      flexDirection: 'column',
      justifyContent:'space-evenly',
      flex:1,
    },

    inputElements: {
      alignItems: 'left',
      flexDirection: 'row',
    },

    title:{
  
      fontSize:36,
      color:'#eb34e5',
      fontWeight:600,
      fontFamily: "Arial",
    },
  
    subTitle:{
  
      fontSize:20,
      color:'#4287f5',
      fontWeight:400,
      fontFamily: "Arial",
    },
  
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 20,
  
  
    },
  
  
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
    },
  
    info: {
      alignItems: 'center',
      justifyContent: 'top',
      padding: 50,
    }
  
  });

export default HomeScreen;