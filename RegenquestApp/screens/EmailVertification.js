import React, { useState } from 'react'


import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import handlePress from '../components/handlePress';
import { Ionicons } from '@expo/vector-icons';


function EmailVertification({ navigation }) {


    // would grab from internal document, make changes later
    // hardcode to see if it works
    const email = 'johndoe@gmail.com'

    function formatEmailAddress(email) {
        const atIndex = email.indexOf("@");
        const domain = email.slice(atIndex + 1);
        const username = email.slice(0, atIndex);

        // replaces with asterisks for everything but last three characters
        const asterisks = "*".repeat(username.length - 3);
        const visibleChars = username.slice(-3);
        const maskedUsername = asterisks + visibleChars;


        const splicedEmail = `${maskedUsername}@${domain}`;

        return splicedEmail;
    }


    const [code, setCode] = useState('');

    function handleContinue() {
        // handle continue button press
        // would take you to the feed! backend auth would be required also lol
    }

    // it should only work if the email actually was verified! (back-end magic here lol)

    const handleBack = handlePress('PhoneOptIn', navigation);
    const handleNoCode = handlePress('PhoneOptIn', navigation);


    return (
        <View id="login" style={[styles.container]}>
            <View style={{ flex: 1, width: '90%', }}>
                <View style={{ flex: 2, justifyContent: 'center', padding: '4%', marginTop: '30%', }}>
                    <Text style={[styles.heading]}>Verify your account</Text>
                    <Text style={[styles.tagline]}>A confirmation email has been sent to {formatEmailAddress(email)}.</Text>
                    <View>
                        <TouchableOpacity onPress={handleNoCode}>
                            <Text style={{ fontWeight: '600', textAlign: 'center', marginTop: '5%' }}>Didn’t receive an email? Send again</Text>
                        </TouchableOpacity>
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
    );
}

export default EmailVertification;
