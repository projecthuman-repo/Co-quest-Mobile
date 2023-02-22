import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';

function Initial({ navigation }) {

    const handleLoginPress = useCallback(() => {
        navigation.navigate('Login');
    }, [navigation]);

    const handleSignupPress = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);


    return (
        <View id="login" style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Lorem Ipsum Marketing Tagline Here</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Login" color="#26A5E7" textColor="white" onPress={handleLoginPress} />
                    <Button title="Signup" color="#C7C9CB" textColor="black" onPress={handleSignupPress} />

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
        padding: '13%',
        width: '100%',
    },

    heading: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },

});

export default Initial;
