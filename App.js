import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image,  Button,Pressable} from 'react-native';

export default function App(props) {
  const { onPress, title = 'Login with Gmail' ,apple = 'Login with Apple'} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/bike1.jpeg')}/>
      <Text style={styles.text1}>Welcome to</Text>
      <Text style={styles.text2}>Power Bike Shop</Text>

      <Pressable style={styles.button1} onPress={onPress}>
        <Image style={styles.icon} source={require('./assets/google.png')}/>
        <Text style={styles.buttontext}>{title}</Text>
      </Pressable>

    
      <Pressable style={styles.button2} onPress={onPress}>
        <Image style={styles.icon} source={require('./assets/apple.png')}/>
        <Text style={styles.buttontext2}>{apple}</Text>
      </Pressable>

      <Text style={styles.text3}>Not a member? Sign up </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    marginBottom: 90,
    width: 180,
    height: 180,
    transform: [{ rotate: '45deg' }],
    borderRadius: 30

  },
  text1:{
    fontSize: 30,
    color: '#737272'

  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 95,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#e8e8e8',

  },
  buttontext:{
    color: '#000000'
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 95,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#000000',

  },
  buttontext2: {
    color: '#ffffff'
  },
  icon:{
    width: 20,

  }
});