import React from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';



export default function CartScreen() {
    return (

    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroll}>

            <View style={{ paddingTop: 15, display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <View style={styles.addItem}>
                        <Image style={styles.productImg} source={require('../assets/bike1.png')}/>
                    </View>

                    <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 , }}>
                        <Text style={styles.bikeName}>Pinarello Bike</Text>
                        <Text style={styles.bikeType}>Mountain Bike</Text>
                        <Text>
                            <Text style={{ color: 'orange' }}>$<Text style={{ fontWeight: 'bold', color: 'black' }}>1,700.00</Text></Text>
                        </Text>
                    </View>

                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={styles.line}>-</Text>
                        <Text>1</Text>
                        <Text style={styles.star}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <View style={styles.addItem}>
                        <Image style={styles.productImg} source={require('../assets/bike8.png')}/>
                    </View>

                    <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                        <Text style={styles.bikeName}>Brompton Bike</Text>
                        <Text style={styles.bikeType}>Road Bike</Text>
                        <Text>
                        <Text style={{ color: 'orange' }}>$<Text style={{ fontWeight: 'bold', color: 'black' }}>1,500.00</Text></Text>
                        </Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20 , justifyContent: 'right'}}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={styles.line}>-</Text>
                        <Text>1</Text>
                        <Text style={styles.star}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <View style={styles.addItem}>
                        <Image style={styles.productImg} source={require('../assets/bike7.png')}/>
                    </View>

                    <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                        <Text style={styles.bikeName}>Pinarello Bike</Text>
                        <Text style={styles.bikeType}>Urban Bike</Text>
                        <Text>
                            <Text style={{ color: 'orange' }}>$<Text style={{ fontWeight: 'bold', color: 'black' }}>1,200.00</Text></Text>
                        </Text>
                    </View>
                    
                </View>

                <View style={{ paddingTop: 20 ,justifyContent: 'right'}}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={styles.line}>-</Text>
                        <Text>1</Text>
                        <Text style={styles.star}>+</Text>
                    </View>
                </View>

            </View>

            <View style ={styles.itemCost}>
                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20}}>
                    <Text style={{color:'grey'}}>
                        Subtotal
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>3,400</Text>
                    </Text>
                </View>

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20}}>
                    <Text style={{color:'grey'}}>
                        Shipping fee
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>100.00</Text>
                    </Text>
                </View>

                <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, }}/>

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style = {{fontWeight: 'bold'}}>
                        Total
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>3,500</Text>
                    </Text>
                </View>

            </View>

            <View><Text h5 style={styles.lastButton} >Proceed to Checkout</Text> </View>
        </ScrollView>
    </SafeAreaView>
    )
};

function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Category" component={DetailsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    scroll: {
        backgroundColor: 'white',
        flex: 1, 
        marginLeft: 15, 
        marginRight: 15 
    },
    addItem : {
        borderRadius: 20,
        backgroundColor: '#e8e8e8', 
    },

    productImg: {
        height: 100, 
        width: 100, 
        borderRadius: 20 
    },
    bikeName: {
        paddingBottom: 10, 
        fontSize: 20 
    },

    bikeType:{
        paddingBottom: 10, 
        color: '#696969'
    },
    line: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
        borderRadius: 500,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: 5,
    },
    star: {
        height: 20,
        width: 20,
        backgroundColor: 'orange',
        borderRadius: 500,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: 5,
        marginLeft: 5
    },

    itemCost: {
        marginTop: 20, 
        backgroundColor: '#e8e8e8',
         padding: 20,
         borderRadius: 20,
         paddingBottom: 20,
         paddingTop: 20
         
    },
    lastButton: {
        textAlign:'center',
        marginTop:20,
        color:"white",
        backgroundColor: 'orange',
        padding: 6,
        borderRadius: 6,
        marginBottom: 5,
        
    }
    
    
  }); 
