import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title, color, textColor }) => (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        minWidth: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default MyButton;
