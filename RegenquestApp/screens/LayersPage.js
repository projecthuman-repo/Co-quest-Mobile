import React, { useState } from 'react'


import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import Button from '../components/Button'
import { Ionicons } from '@expo/vector-icons';
import handlePress from '../components/handlePress';
import { FontAwesome } from '@expo/vector-icons';

import Layer from '../components/Layer';


// hard coded rn will change after i figure out api stuff !

const layers = [
    { title: 'Topic name' },
    { title: 'Sports' },
    { title: 'Arts' },
    { title: 'Music' },


    // Add more interests here...
];


function LayersPage({ navigation }) {

    const handleBack = () => navigation.goBack();
    const handleSkip = handlePress('LayersPage', navigation);
    const handleContinue = handlePress('LayersPage', navigation);

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={[styles.container]}>

                <View style={{ flex: 1, width: '90%', }}>
                    <View style={{ flex: 2, justifyContent: 'flex-start', padding: '4%', marginTop: '30%', }}>
                        <Text style={[styles.heading]}>Let’s get you stitched in.</Text>
                        <Text style={[styles.tagline, { marginTop: '10%', }]}>Check out these layers!</Text>
                        <Text style={[styles.tagline, { marginTop: '5%', fontSize: '13' }]}>Layers are small communities with like-minded people. You can participate in group activities and projects here.</Text>

                        <View style={{ flexDirection: 'column', justifyContent: 'left', marginTop: '5%' }}>
                            {layers.map((layer, index) => (
                                <Layer
                                    key={index}
                                    title={layer.title}
                                    color={layer.color}
                                    textColor={layer.textColor}
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
                                <Button title="Finish" color="#26A5E7" textColor="white" onPress={handleContinue} />
                            </View>

                        </View>
                    </View>
                </View >
            </View >
        </TouchableWithoutFeedback >

    );
}

export default LayersPage;
