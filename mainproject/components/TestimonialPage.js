import React, {useState,useEffect} from 'react';
import {ScrollView,View,Text,TextInput,Button,FlatList} from 'react-native';
import {useValue} from './ValueStorageContext';
import {getFeedback,clearData} from './Feedback';

const TestimonialPage = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    const [cleared,setCleared] = useState(false);
    const saveFeedback = (result) => {
        console.log("here is the result in saveFeedback:");
        console.dir(result);
        setFeedback(result);
    }

    useEffect(()=>{getFeedback(saveFeedback)},
            []);

    return (
        <View style = {{
            flexDirection: 'column',
            flex:1,
            alignItems: 'center',
        
          }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'top',
                }}>
                <Text style = {{
                    fontSize:36,
                    color:'#eb34e5',
                    fontWeight:600,
                    fontFamily: "Arial",
                    }}>
                    Artist Portfolio Helper
                </Text>
                <Text style={{
                    fontSize:20,
                    color:'#4287f5',
                    fontWeight:400,
                    fontFamily: "Arial",
                    }}>
                    Here are the great things users are saying!
                </Text>
                <Text>
                    ~~~~~~~~~~~~~
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Button
                title="get testimonials"
                onPress = {() =>
                    getFeedback(saveFeedback)} 
                />
                <Button
                    title="reset"
                    onPress = {() => 
                            {clearData();
                            getFeedback(saveFeedback)
                            }
                        }
                />
            </View>

            <FlatList
                data={feedback}
                keyExtractor={({ id }, index) => index}
                renderItem={({ item }) => (
                        <Text style={{
                            fontSize:20,
                            color:'#4287f5',
                            fontWeight:400,
                            fontFamily: "Arial",
                            }}>
                            {item.value}
                        </Text>
            )}
            /> 
        </View>

    );
}
    
const styles= () => StyleSheet.create({

    container: {
      flexDirection: 'column',
      flex:1,
      alignItems: 'center',
  
    },
  
    labelContainer: {
      alignItems: 'center',
      justifyContent: 'top',
  
    },
});
export default TestimonialPage;