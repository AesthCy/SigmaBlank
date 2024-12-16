import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const Signup = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.navigate('Welcome');
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleHomePage = () => {
        navigation.navigate('HomePage');
    }

    return(
        <LinearGradient style={{flex: 1}} colors={[COLORS.primary, COLORS.secondary]}>
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <View style={styles.topSection}>
                    <TouchableOpacity style={styles.buttonBack} onPress={handleGoBack}>
                        <Icon name="arrow-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.textLogin}>
                        Let's Get Started!
                    </Text>
                    <Text style={styles.textSub}>
                        Enter the credentials below
                    </Text>
                </View>
                
                <View style={styles.middleSection}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCapitalize='none'>
                    </TextInput>
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}>
                    </TextInput>
                    <TextInput 
                        style={styles.input}
                        placeholder='Confirm Password'
                        secureTextEntry={true}>
                    </TextInput>
                </View>

                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={handleHomePage}>
                        <Text style={styles.buttonTextLogin}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.continue}>
                        <Text style={styles.continueText}>
                            Or continue with
                        </Text>
                    </View>
                    <TouchableOpacity style={[styles.google, {flexDirection: 'row'}]}>
                        <Image
                            source={require('../assets/Google.png')}
                            style={styles.googleImage}>
                        </Image>
                        <Text style={styles.buttonTextGoogle}>
                            Google
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.signUp}>
                        <Text style={styles.spacing}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={{fontWeight: 'bold'}}>
                                Login
                            </Text>
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
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'flex-start'
    },

    buttonBack: {
        width: 40,
        height: 40,
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: COLORS.grey,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },

    topSection: {
        flex: 3,
    },

    middleSection: {
        flex: 3,
    },

    bottomSection: {
        flex: 2,
        alignItems: 'center'
    },

    textLogin: {
        fontSize: 48,
        marginTop: 20,
        fontWeight: 'bold',
    },

    textSub: {
        marginTop: 10,
        fontSize: 20,
    },

    input: {
        width: '100%',
        height: 45,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 45,
        marginVertical: 10,
        paddingHorizontal: 15,
        color: COLORS.grey
    },

    buttonLogin: {
        width: '100%',
        height: 60,
        paddingVertical: 15,
        backgroundColor: COLORS.darkGrey,
        borderRadius: 45,
        justifyContent: 'center',
    },

    buttonTextLogin: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonTextGoogle: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 4
    },

    continue: {
        marginTop: 20,
    },

    continueText: {
        fontSize: 18,
        color: COLORS.grey
    },

    google: {
        width: '100%',
        height: 60,
        marginTop: 20,
        paddingVertical: 15,
        borderColor: COLORS.darkGrey,
        borderWidth: 2,
        borderRadius: 45,
        justifyContent: 'center',
    },

    googleImage: {
        width: 20,
        height: 20,
        marginRight: 4
    },

    signUp: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },

    spacing: {
        paddingRight: 5
    }
});

export default Signup