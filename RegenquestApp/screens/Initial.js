import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button';

function Initial({ navigation }) {

    const handleLoginPress = useCallback(() => {
        navigation.navigate('Login');
    }, [navigation]);

    const handleSignupPress = useCallback(() => {
        navigation.navigate('Signup');
    }, [navigation]);


    return (
        <View id="login" style={custom.container}>
            <View style={styles.content}>
                <Text style={styles.tagline}>Lorem Ipsum Marketing Tagline Here</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Login" color="#26A5E7" textColor="white" onPress={handleLoginPress} />
                    <Button title="Signup" color="#C7C9CB" textColor="black" onPress={handleSignupPress} />

                </View>
            </View>
        </View >
    );
}

const custom = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default Initial;
