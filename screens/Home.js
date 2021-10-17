import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './Category';

function HomeScreen(props) {
  const {navigation, title = 'Login with Gmail' ,apple = 'Login with Apple'} = props;

  return (
    
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/bike1.jpeg')}/>
        <Text style={styles.text1}>Welcome to</Text>
        <Text style={styles.text2}>Power Bike Shop</Text>

        <Pressable style={styles.button1} onPress={() => navigation.navigate('Category')}>
          <Image style={styles.icon} source={require('../assets/google.png')}/>
          <Text style={styles.buttontext}>{title}</Text>
        </Pressable>

      
        <Pressable style={styles.button2}  onPress={() => navigation.navigate('Category')}>
        <Image style={styles.icon1} source={require('../assets/apple.png')}/>
          <Text style={styles.buttontext2}>{apple}</Text>
        </Pressable>

        <Text style={{ color: '#737272' }}>Not a member?<Text style={{ color: 'red' }}> Sign up</Text> </Text>
        <StatusBar style="auto" />
      </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    marginBottom: 90,
    width: 200,
    height: 200,
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
    color: '#000000',
    fontSize: 15,
    marginLeft: 10,
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 95,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#000000',

  },
  buttontext2: {
    color: '#ffffff',
    fontSize: 15,
    marginLeft: 10,
  },
  icon:{
    width: 20,
    height: 20,

  },
  icon1:{
    color: '#ffffff',
    width: 20,
    height: 20
  }
});