import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TextInput } from "@react-native-material/core";
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';


function OptInCode({ navigation }) {


    // would grab from internal document, make changes later
    // hardcode to see if it works
    const phoneNumber = '8788875650'

    function formatPhoneNumber(phoneNumber) {
        return `${'***-***-'}${phoneNumber.slice(6)}`;
    }


    const [code, setCode] = useState('');

    const handleContinue = handlePress('Signup', navigation);
    const handleBack = handlePress('Login', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View id="login" style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'center', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Improve your privacy</Text>
                        <Text style={[styles.tagline]}>An authentication code has been sent to {formatPhoneNumber(phoneNumber)}. The code is valid for 15 minutes.</Text>
                        <View>
                            <TextInput variant="outlined" style={styles.input} type="text"
                                id='code' label='6-digit code'
                                color={'#000000'}
                                onChangeText={newText => setCode(newText)}
                                defaultValue={code}
                                InputLabelProps={{ shrink: true }}
                            >
                            </TextInput>
                        </View>

                        <View style={{ paddingTop: '10%' }}>
                            <Button title="Continue" color="#26A5E7" textColor="white" onPress={handleContinue} />
                        </View>
                    </View>

                    <View style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: '20%' }}>


                        <View style={[styles.buttonContainer, { marginTop: 10 }]}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                            <TouchableOpacity onPress={handleBack} >
                                <Text style={styles.back}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View >
            </View >
        </TouchableWithoutFeedback >

    );
}

export default OptInCode;
