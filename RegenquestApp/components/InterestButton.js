import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const InterestButton = ({ title }) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(!pressed);
    };

    const buttonStyle = [
        styles.button,
        pressed && styles.buttonPressed,
    ];

    const titleStyle = [
        styles.title,
        pressed && styles.titlePressed,
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            {pressed && (
                <MaterialIcons
                    name="check"
                    size={24}
                    color="black"
                    style={styles.icon}
                />
            )}
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#8ADC94',
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        width: 'auto',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },

    buttonPressed: {
        backgroundColor: '#45C654',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '400',
        color: 'black',

    },
    titlePressed: {
        fontWeight: '600',
        paddingLeft: 25,
    },
    icon: {
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default InterestButton;
