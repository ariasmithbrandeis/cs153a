/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';

const Profile = () => {
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");

    return (
        <View>
            <Text> Profile Page</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text> Enter name: </Text>
                <TextInput
                    style={{height: 40, backgroundColor: 'white'}}
                    placeholder="Enter name"
                    onChangeText={newText => setName(newText)}
                    defaultValue={name}
                />
            </View>
            <View style={{felx:1, flexDirection: 'row'}}>
            <Text> Enter email: </Text>
                style={{height: 40, backgroundColor: 'white'}}
                placeholder="Enter email"
                onChangeText={newText => setEmail(newText)}
                defaultValue={email}
            />
            </View>
        </View>
    )
}

export default Profile;