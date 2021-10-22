import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './Cart'



export default function DetailsScreen(props) {
    const {navigation} = props;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={{display: 'flex',flexDirection: 'row'}}>
                    <View style={styles.addToCarContainer}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('Category')}>
                        <Text style={styles.shareButtonText}><Text  style={{color: 'orange'}} >All</Text></Text>  
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.addToCarContainer}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('Category')}>
                        <Text style={styles.shareButtonText}>Roadbike</Text>  
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.addToCarContainer}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('Category')}>
                        <Text style={styles.shareButtonText}>Mountain</Text>  
                        </TouchableOpacity>
                    </View> 

                    <View style={styles.addToCarContainer}>
                        <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate('Category')}>
                        <Text style={styles.shareButtonText}>Sport</Text>  
                        </TouchableOpacity>
                    </View> 

                </View>

                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike1.png')}/>
                        <Text style={styles.name}>Pinarello Bike</Text>
                        <Text style={styles.price} h4>
                            $ <Text style={{ fontWeight: 'bold', color: 'black' }}>1,700.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                        
                    
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike8.png')}/>
                        <Text style={styles.name}>Ninja Bike</Text>
                        <Text style={styles.price} h4>
                            $ <Text style={{ fontWeight: 'bold', color: 'black' }}>1,200.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike7.png')}/>
                        <Text style={styles.name}>Schwinn Bike</Text>
                        <Text style={styles.price} h4>
                         $ <Text style={{ fontWeight: 'bold', color: 'black' }}>1,500.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike5.png')}/>
                        <Text style={styles.name}>Norco Bike</Text>
                        <Text style={styles.price} h4>
                         $ <Text style={{ fontWeight: 'bold', color: 'black' }}>1,100.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike6.png')}/>
                        <Text style={styles.name}>Mountain Bike</Text>
                        <Text style={styles.price} h4>
                         $ <Text style={{ fontWeight: 'bold', color: 'black' }}>1,900.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike4.png')}/>
                        <Text style={styles.name}>Racing Bike</Text>
                        <Text style={styles.price} h4>
                         $ <Text style={{ fontWeight: 'bold', color: 'black' }}>980.00</Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Text h6 style={styles.description} >added to cert</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    
    );
  }

const Tab = createBottomTabNavigator();

function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Category" component={DetailsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


  
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        
        
    },

    scroll: {
        backgroundColor: 'white',
        flex: 1, 
        marginLeft: 15, 
        marginRight: 15 
    },

    shareButton: {
        marginTop:10,
        width: 100,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        backgroundColor: "#e8e8e8",
      },
      shareButtonText:{
        color: "#000000",
        fontSize:20,
      },


    
    row:{
      flex: 1,
      flexDirection: 'row',
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'center',
      
      
      
    },
    


      addToCarContainer:{
        display: 'flex',
        flexDirection:'row',
        marginHorizontal:10,
        paddingHorizontal: 10
      },

    products:{
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
      marginHorizontal:10,
      backgroundColor: '#e8e8e8',
      borderRadius: 15

    },
    productImg:{
      width:160,
      height:160,
      
    },
    name:{
      fontSize:20,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"orange",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"white",
      backgroundColor: 'orange',
      padding: 5,
      borderRadius: 6,
      marginBottom: 5,
    },
    
  }); 
