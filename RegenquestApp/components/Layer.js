import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Layer = ({ title }) => {
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
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            <View style={styles.textContainer}>
                <Text style={titleStyle}>{title}</Text>
                {!pressed && <Text style={styles.join}>Join</Text>}
                {pressed && <Text style={styles.join}>Joined!</Text>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 0,
        borderRadius: 4,
        padding: '7%',
        marginLeft: 10,
        marginBottom: 15,
    },

    buttonPressed: {
        backgroundColor: '#cdd1d9',
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        flex: 1,
    },

    join: {
        color: '#007BED',
        marginLeft: 10,
        flex: 0,
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
});

export default Layer;
