import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, Button, TextInput } from 'react-native';

const Exam3c = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ingr, setIngr] = useState('');

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [])

    return(
        <View>
            <Text>API Demo</Text>
            <Text>{JSON.stringify(data,null,5)}</Text>
            <TextInput placeholder="Ingrediant"
            onChangeText={newText =>
                setIngr(newText)}/>

        </View>
    );
}

export default Exam3c;