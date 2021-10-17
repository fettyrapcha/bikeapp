import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function DetailsScreen() {

    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{flexDirection: 'row'}}>
                <Button style={styles.shareButton}  onPress={() => navigation.navigate('Category')}>
                    <Text style={styles.shareButtonText}>asd</Text>
                </Button>

                </View>

                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike1.png')}/>
                        <Text style={styles.name}>Pinarello Bike</Text>
                        <Text style={styles.price} h4>
                        $ 1,700.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 2h ago
                        </Text>
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike8.png')}/>
                        <Text style={styles.name}>Ninja Bike</Text>
                        <Text style={styles.price} h4>
                        $ 1,200.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 5h ago
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike7.png')}/>
                        <Text style={styles.name}>Schwinn Bike</Text>
                        <Text style={styles.price} h4>
                        $ 1,500.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 1h ago
                        </Text>
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike5.png')}/>
                        <Text style={styles.name}>Norco Bike</Text>
                        <Text style={styles.price} h4>
                        $ 1,100.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 2h ago
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike6.png')}/>
                        <Text style={styles.name}>Mountain Bike</Text>
                        <Text style={styles.price} h4>
                        $ 1,900.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 8h ago
                        </Text>
                    </View>

                    <View style={styles.products}>
                        <Image style={styles.productImg} source={require('../assets/bike4.png')}/>
                        <Text style={styles.name}>Racing Bike</Text>
                        <Text style={styles.price} h4>
                        $ 980.00
                        </Text>
                        <Text h6 style={styles.description}>
                        added 1h ago
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    row:{
      
      flexDirection: 'row',
      marginTop:20,
      
      
    },
    
    // shareButton: {
    //     marginTop:10,
    //     height:45,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius:30,
    //     backgroundColor: "#00BFFF",
    //   },
    //   shareButtonText:{
    //     color: "#FFFFFF",
    //     fontSize:20,
    //   },
    //   addToCarContainer:{
    //     marginHorizontal:30
    //   },

    products:{
      alignItems:'center',
      marginHorizontal:10,
      backgroundColor: '#e8e8e8',
      borderRadius: 15

    },
    productImg:{
      width:180,
      height:180,
      
    },
    name:{
      fontSize:28,
      color:"#696969",
      fontWeight:'bold'
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      textAlign:'center',
      marginTop:10,
      color:"#696969",
      paddingBottom: 5
    },
    
  }); 
