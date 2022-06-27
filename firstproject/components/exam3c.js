import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, SafeAreaView, Button, } from 'react-native';



const Exam3c = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ingr,setIngr] = useState('');

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingr])

    return(
        <SafeAreaView>
            <Text style={{fontSize:30,margin:10}}>Ingredient Finder</Text>
            <View style={{flexDirection:'row',margin:10}}>
                <View>
                <Text>Push the button below to select the main ingredient</Text>
                <Text>Main ingredient is: {ingr}</Text>
                </View>
            </View>
            
            <FlatList
                data={data}
                keyExtractor={({ idMeal }, index) => idMeal}
                renderItem={({ item }) => (
                    <View style={{
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    backgroundColor:'#fa8072',
                                    flex: 1}}>
                        <View>
                        <Button title={item.strIngredient}
                        style={{
                          alignSelf:'stretch'}}
                        onPress = {(ingr) => setIngr(item.strIngredient)}/>
                        </View>
                        {/* {<Image 
                            style={ {  width: 50, height: 50,}}
                            source={{uri:item.strMealThumb}} />
                         */}
                    </View>
                )}
            /> 

        </SafeAreaView>
    );
}

export default Exam3c;
