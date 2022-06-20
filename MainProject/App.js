import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native'; 

const App = () => {

  return (

    <View style={styles.container}>
      <View>   
        <Text style={styles.label}>
          Developer's Page
        </Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.title}>

          Aria Smith
        </Text>
        <Text style={styles.subTitle}>

          Computer Science/Studio Art - Senior

        </Text>
      </View>
      <View>
      <Image source={{uri:'https://cdn.prestosports.com/action/cdn/img/mw=600/mh=800/cr=n/d=0gsu4/yq9mydbfl7exh153.jpg'}} style = {{height: 500, width: 300, margin: 5 }}/>
      </View>
      <View style={styles.info}>
      <Text style={styles.paragraph}>

         Hello! I am a rising senior at Brandeis University with a double major in Computer Science and Studio Art. I love using technology to create art or to help the creative process.       </Text>

      <Text style={styles.paragraph}>

        This application is a portfoio and resume maker that is designed specifically for artists' creative and organizational needs.  The artist will be able to pull images of their artwork from traditional sources such as  local device and drive, as well as social media accounts and artists online repositories. I hope to add a visibility component and resume generator.    </Text>
      </View>
    </View>

  );


}

const styles = StyleSheet.create({


  container: {
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    flexDirection: 'column',
    flex:1,

  },

  labelContainer: {
    alignItems: 'center',
    justifyContent: 'top',

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




export default App;