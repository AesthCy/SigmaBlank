import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };
    
    return (
        <LinearGradient style={{flex: 1}} colors={[COLORS.primary, COLORS.secondary]}>
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={styles.topSection}>
                    <Image
                        source={require('../assets/Welcome.png')}
                        style={styles.image}>
                    </Image>
                </View>

                <View style={styles.bottomSection}>
                    <Text style={styles.textWelcome}>
                        Welcome to Sigma!
                    </Text>
                    <Text style={styles.textSub}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.buttonLeft} onPress={handleLogin}>
                            <Text style={styles.buttonTextLeft}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRight} onPress={handleSignUp}>
                            <Text style={styles.buttonTextRight}>
                                Signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 20
    },

    topSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomSection: {
        flex: 1,
        alignItems: 'center'
    },

    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain'
    },

    textWelcome: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textSub: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
    },

    buttonLeft: {
        flex: 1,
        width: 400,
        marginTop: 30,
        marginRight: -35,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: COLORS.darkGrey,
        borderRadius: 45
    },

    buttonRight: {
        flex: 1,
        width: 400,
        marginTop: 30,
        marginLeft: -35,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: COLORS.white,
        borderRadius: 45
    },

    buttonTextLeft: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonTextRight: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Welcome