import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = () => {
    return (
        <LinearGradient style={{flex: 1}} colors={[COLORS.primary, COLORS.secondary]}>
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>
                        Welcome, Gerald!
                    </Text>
                </View>

                <View style={styles.midSection}>
                    <View style={styles.borderBawah}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.categoryText}>
                                Category
                            </Text>

                            <TouchableOpacity>
                                <Text style={styles.seeMoreText}>
                                    See More
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.categoryButton, {flexDirection: 'row'}]}>
                            <View style={styles.pressIcon}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Food.png')}>
                                    </Image>
                                </TouchableOpacity>

                                <Text>
                                    Food
                                </Text>
                            </View>
                            
                            <View style={styles.pressIcon}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Gift.png')}>
                                    </Image>
                                </TouchableOpacity>

                                <Text>
                                    Gift
                                </Text>
                            </View>

                            <View style={styles.pressIcon}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Fashion.png')}>
                                    </Image>
                                </TouchableOpacity>

                                <Text>
                                    Fashion
                                </Text>
                            </View>

                            <View style={styles.pressIcon}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Gadget.png')}>
                                    </Image>
                                </TouchableOpacity>

                                <Text>
                                    Gadget
                                </Text>
                            </View>

                            <View style={styles.pressIcon}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Accessory.png')}>
                                    </Image>
                                </TouchableOpacity>

                                <Text>
                                    Accessory
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.borderBawah}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.categoryText}>
                                Featured Products
                            </Text>

                            <TouchableOpacity>
                                <Text style={styles.seeMoreText}>
                                    See More
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={[styles.bagiDua, {flexDirection: 'row'}]}>
                            <View style={styles.box}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Sneaker.png')}
                                        style={styles.gambarSample}>
                                    </Image>
                                </TouchableOpacity>

                                <Text style={styles.detailText}>
                                    Sneakers
                                </Text>
                                <Text style={styles.detailText}>
                                    Rp. 999.000
                                </Text>
                            </View>

                            <View style={styles.box}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Sneaker.png')}
                                        style={styles.gambarSample}>
                                    </Image>
                                </TouchableOpacity>

                                <Text style={styles.detailText}>
                                    Sneakers
                                </Text>
                                <Text style={styles.detailText}>
                                    Rp. 999.000
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.bagiDua, {flexDirection: 'row'}]}>
                            <View style={styles.box}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Sneaker.png')}
                                        style={styles.gambarSample}>
                                    </Image>
                                </TouchableOpacity>

                                <Text style={styles.detailText}>
                                    Sneakers
                                </Text>
                                <Text style={styles.detailText}>
                                    Rp. 999.000
                                </Text>
                            </View>

                            <View style={styles.box}>
                                <TouchableOpacity>
                                    <Image 
                                        source={require('../assets/Sneaker.png')}
                                        style={styles.gambarSample}>
                                    </Image>
                                </TouchableOpacity>

                                <Text style={styles.detailText}>
                                    Sneakers
                                </Text>
                                <Text style={styles.detailText}>
                                    Rp. 999.000
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.botNav}>
                    <View style={[styles.marginKotak, {flexDirection: 'row'}]}>
                        <TouchableOpacity style={styles.pressIcon}>
                            <Image 
                                source={require('../assets/Main.png')}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pressIcon}>
                            <Image 
                                source={require('../assets/Shop.png')}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pressIcon}>
                            <Image 
                                source={require('../assets/Bag.png')}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pressIcon}>
                            <Image 
                                source={require('../assets/Favorite.png')}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pressIcon}>
                            <Image 
                                source={require('../assets/Profile.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },

    botNav: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white
    },

    marginKotak: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pressIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    welcome: {
        marginTop: 40,
        alignItems: 'center'
    },

    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    midSection: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    },

    categoryButton: {
        marginTop: 20
    },

    categoryText: {
        flex: 1,
        fontSize: 20
    },

    seeMoreText: {
        flex: 1,
        fontSize: 18,
        color: COLORS.red
    },

    borderBawah: {
        marginBottom: 20
    },

    bagiDua: {

    },

    box: {
        flex: 1,
        backgroundColor: COLORS.lightGrey,
        borderRadius: 20,
        marginHorizontal: 5,
        marginTop: 20,
        height: 160,
        width: 180
    },

    gambarSample: {
        width: '100%',
        borderRadius: 20
    },

    detailText: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: COLORS.black
    }
})

export default HomePage;