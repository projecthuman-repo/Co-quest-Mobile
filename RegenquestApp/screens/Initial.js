import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BlueBotton from '../components/blueButton';
import GreyBotton from '../components/greyButton';


function Initial({ navigation }) {

    const handleLoginPress = useCallback(() => {
        navigation.navigate('Login');
    }, [navigation]);

    const handleSignupPress = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);

    const buttonStyles = {
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        minWidth: 150,
    };

    return (
        <View id="login" style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Lorem Ipsum Marketing Tagline Here</Text>
                <View style={styles.buttonContainer}>
                    <BlueBotton title="Login" onPress={() => navigation.navigate('Login')} />
                    <GreyBotton title="Signup" onPress={() => navigation.navigate('Signup')} />

                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#CBCBCB'
    },
    content: {
        backgroundColor: '#FFFFFF',
        padding: '10%',
        width: '100%',
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },

});

export default Initial;
