import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';
import { FontAwesome } from '@expo/vector-icons';

import InterestButton from '../components/InterestButton';


// hard coded rn will change after i figure out api stuff !

const interests = [
    { title: 'Topic name' },
    { title: 'Sports' },
    { title: 'Arts' },
    { title: 'Music' },
    { title: 'Generative Art' },
    { title: 'Arts' },
    { title: 'Music' },
    { title: 'Basketball' },
    { title: 'Generative Art' },
    { title: 'Arts' },
    { title: 'Music' },
    { title: 'Sports' },
    { title: 'Arts' },
    { title: 'Music' },
    { title: 'Arts' },
    { title: 'Music' },
    { title: 'Basketball' },

    // Add more interests here...
];


function Interests({ navigation }) {

    const handleBack = handlePress('Login', navigation);
    const handleSkip = handlePress('PFP', navigation);
    const handleContinue = handlePress('PFP', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'flex-start', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Let’s get you stitched in.</Text>
                        <Text style={[styles.tagline, { marginTop: '10%', }]}>What are your interests?</Text>
                        <Text style={[styles.tagline, { marginTop: '5%', fontSize: '18' }]}>Select 3 or more.</Text>

                        <View style={{ display: 'flex', marginTop: '5%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {interests.map((interest, index) => (
                                <InterestButton
                                    key={index}
                                    title={interest.title}
                                    color={interest.color}
                                    textColor={interest.textColor}
                                />
                            ))}

                        </View>


                    </View>

                    <View style={[styles.buttonContainer, { paddingBottom: '10%', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <TouchableOpacity onPress={handleBack} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                            <Text style={styles.back}>Back</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', }}>


                            <View style={{ width: '50%', marginTop: '5%' }}>
                                <Button title="Next" color="#26A5E7" textColor="white" onPress={handleContinue} />
                            </View>

                            <TouchableOpacity onPress={handleSkip}>
                                <Text style={[styles.back, { marginRight: 20 }]}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            </View >
        </TouchableWithoutFeedback >

    );
}

export default Interests;
