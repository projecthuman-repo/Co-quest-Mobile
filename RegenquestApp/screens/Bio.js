import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TextInput, IconButton } from "@react-native-material/core";
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function Bio({ navigation }) {


    // hard code it for now 
    const name = 'John'

    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');


    const handleContinue = handlePress("Connect", navigation);
    const handleBack = handlePress('Signup', navigation);
    const handleSkip = handlePress('Login', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'flex-start', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Welcome to Regenquest, {name}.</Text>
                        <Text style={[styles.tagline]}>Let’s get to know you.</Text>
                        <View>
                            <TextInput variant="outlined" style={styles.input} type="text"
                                id='bio' label='Add your bio'
                                multiline={true}
                                numberOfLines={20}
                                color={'#000000'}
                                height={150}
                                onChangeText={newText => setBio(newText)}
                                defaultValue={bio}>
                            </TextInput>


                        </View>

                        <View style={{ marginTop: '30%' }}>
                            <TextInput variant="outlined" style={styles.input} type="text"
                                id='location' label='Location'
                                color={'#000000'}
                                onChangeText={newText => setLocation(newText)}
                                defaultValue={location}
                                trailing={props => (
                                    <IconButton icon={props => <Icon name="map-marker" {...props} />} {...props} />
                                )}
                            >
                            </TextInput>
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

export default Bio;
