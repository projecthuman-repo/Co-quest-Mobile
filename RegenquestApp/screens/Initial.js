import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button';
import handlePress from '../components/handlePress';

function Initial({ navigation }) {

    const handleLoginPress = handlePress('Login', navigation);
    const handleSignUpPress = handlePress('Signup', navigation);


    return (
        <View style={custom.container}>
            <View style={styles.content}>
                <Text style={styles.tagline}>Lorem Ipsum Marketing Tagline Here</Text>

                <Button title="Login" color="#26A5E7" textColor="white" onPress={handleLoginPress} />
                <Button title="Sign Up" color="#C7C9CB" textColor="black" onPress={handleSignUpPress} />


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
