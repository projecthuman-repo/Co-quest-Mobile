import React, { useState, useCallback } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TextInput } from "@react-native-material/core";
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';

function PhoneOptIn({ navigation }) {

    const handleBack = handlePress('Signup', navigation)
    const handleSkip = handlePress('Login', navigation)
    const handleContinue = handlePress('Code', navigation)

    const [phoneNumber, setPhoneNumber] = useState('');


    return (
        <View id="login" style={[styles.container]}>
            <View style={{ flex: 1, width: '87%', }}>
                <View style={[styles.buttonContainer, { justifyContent: 'center', marginVertical: '25%' }]}>
                    <Ionicons name="checkmark-circle" size={24} color="#46B85F" />
                    <Text style={[styles.back]}>Your account has been verified.</Text>
                </View>
                <Text style={[styles.heading]}>Improve your privacy</Text>
                <Text style={[styles.tagline]}>Opt in to 2 factor authentication to ensure your account is secure.</Text>
                <View>
                    <TextInput variant="outlined" style={styles.input} type="text"
                        id='phoneNumber' label='Phone Number'
                        color={'#000000'}
                        onChangeText={newText => setPhoneNumber(newText)}
                        defaultValue={phoneNumber}>
                    </TextInput>
                </View>

                <View style={{ flex: 1, marginTop: '10%', alignItems: 'center' }}>
                    <Button title="Continue" color="#26A5E7" textColor="white" onPress={handleContinue} />
                </View>

                <View style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: '20%' }}>

                    <View style={[styles.buttonContainer, { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <TouchableOpacity onPress={handleBack} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                            <Text style={styles.back}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSkip}>
                            <Text style={[styles.back, { textAlign: 'right' }]}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </View >
    );
}

export default PhoneOptIn;
