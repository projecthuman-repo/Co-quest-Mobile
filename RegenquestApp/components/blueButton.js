import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        minWidth: 150,
        backgroundColor: '#26A5E7',

    },
    title: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default MyButton;