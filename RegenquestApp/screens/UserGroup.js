import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';
import { FontAwesome } from '@expo/vector-icons';


function UserGroup({ navigation }) {

    const handleBack = () => navigation.goBack();
    const handleSkip = handlePress('Interests', navigation);
    const handleContinue = handlePress('Interests', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'flex-start', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Let’s get you stitched in.</Text>
                        <Text style={[styles.tagline, { marginTop: '10%', }]}>Find your team. What brings you to Regenquest?</Text>
                        <Text style={[styles.tagline, { marginTop: '10%', fontSize: '18' }]}>Select all that apply.</Text>
                        <View style={{ marginTop: '5%', }}>
                            <TouchableOpacity style={[styles.iconContainer, {
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', height: '15%', shadowColor: 'black',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                elevation: 3,
                            }]}>
                                <Text style={[styles.back, { fontWeight: '600', }]}>Volunteer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, {
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', height: '15%', shadowColor: 'black',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                elevation: 3,
                            }]}>
                                <Text style={[styles.back, { fontWeight: '600', }]}>Create a project</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, {
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', height: '15%', shadowColor: 'black',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                elevation: 3,
                            }]}>
                                <Text style={[styles.back, { fontWeight: '600', }]}>Organize a community</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.iconContainer, {
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', height: '15%', shadowColor: 'black',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 5,
                                elevation: 3,

                            }]}>
                                <Text style={[styles.back, { fontWeight: '600', }]}>Spectate</Text>
                            </TouchableOpacity>
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

export default UserGroup;
