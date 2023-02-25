import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';
import { FontAwesome } from '@expo/vector-icons';


function ConnectSocial({ navigation }) {

    const handleBack = handlePress('Login', navigation);
    const handleSkip = handlePress('PFP', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'flex-start', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Connect to your social media.</Text>
                        <Text style={[styles.tagline, { marginTop: '10%', }]}>Where else are you?</Text>
                        <View style={{ marginTop: '10%', }}>
                            <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row', alignItems: 'center', marginTop: '5%' }]}>
                                <FontAwesome name='facebook-square' size={30} />
                                <Text style={[styles.back, { paddingLeft: '10%' }]}>Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row', alignItems: 'center', marginTop: '5%' }]}>
                                <FontAwesome name='twitter' size={30} />
                                <Text style={[styles.back, { paddingLeft: '10%' }]}>Twitter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row', alignItems: 'center', marginTop: '5%' }]}>
                                <FontAwesome name="instagram" size={30} color="black" />
                                <Text style={[styles.back, { paddingLeft: '10%' }]}>Instagram</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, { flexDirection: 'row', alignItems: 'center', marginTop: '5%' }]}>
                                <FontAwesome name='google' size={30} />
                                <Text style={[styles.back, { paddingLeft: '10%' }]}>Google</Text>
                            </TouchableOpacity>
                        </View>

                    </View>




                    <View style={[styles.buttonContainer, { paddingBottom: '10%', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <TouchableOpacity onPress={handleBack} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                            <Text style={styles.back}>Back</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', }}>

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

export default ConnectSocial;
