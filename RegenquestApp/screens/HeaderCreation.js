import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { Stack, Avatar, Badge, IconButton, Box } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../components/styles';
import { Header } from '@react-navigation/stack';


function HeaderPic({ navigation }) {
    const [hasSelectedHeaderPic, setHasSelectedHeaderPic] = useState(false);
    const [image, setImage] = useState(null);
    const [showCameraButtons, setShowCameraButtons] = useState(false);

    const handleBack = () => navigation.goBack();
    const handleSkip = () => {
        setHasSelectedHeaderPic(true);
        navigation.navigate('UserGroup');
    };
    const handleContinue = () => navigation.navigate('UserGroup');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setHasSelectedHeaderPic(true);
        }
    };

    const handleCameraPress = () => {
        console.log(showCameraButtons);
        setShowCameraButtons(true);
    };



    const takePicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
            setHasSelectedHeaderPic(true);
        }
    };


    const viewWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.container]}>
            <View style={{ flex: 1, width: '90%' }}>
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'flex-start',
                        padding: '4%',
                        marginTop: '30%',
                    }}
                >
                    <Text style={[styles.heading]}>Add a header profile to your profile.</Text>
                    <Text style={[styles.tagline, { marginTop: '5%' }]}>
                        Personalize your Profile.
                    </Text>

                    <View style={{ alignItems: 'center', marginTop: '5%' }}>
                        {hasSelectedHeaderPic && image ? (

                            <View>
                                <Image style={specific.image} source={{ uri: image }} />

                                <View style={{ position: 'absolute', bottom: -100, left: 10 }}

                                >
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Avatar color="#D9D9D9" size={160} />
                                        <Text style={[styles.heading, { top: 80, left: 20 }]}>John Doe</Text>
                                    </View>
                                </View>
                            </View>
                        ) : (

                            <View>

                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>

                                    <Box
                                        w={viewWidth} h={200} m={0} style={{ backgroundColor: 'grey' }}
                                    />

                                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                                        <IconButton
                                            icon={(props) => <Icon name="camera" {...props} />}
                                            color="white"
                                            size={30}
                                            onPress={handleCameraPress}
                                            contentContainerStyle={{
                                                backgroundColor: '#45C654',
                                                borderRadius: 10,
                                                padding: 8,
                                            }}
                                        />
                                    </View>

                                    <View style={{ position: 'absolute', bottom: -100, left: 10 }}

                                    >
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Avatar color="#D9D9D9" size={160} />
                                            <Text style={[styles.heading, , { top: 80, left: 20 }]}>John Doe</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                        )}

                        {showCameraButtons && (
                            <View style={{
                                alignItems: 'center', marginTop: '25%', backgroundColor: 'transparent'
                            }}>
                                <View style={[styles.content, { backgroundColor: 'transparent' }]}>
                                    <TouchableOpacity onPress={takePicture} style={[styles.iconContainer,
                                    {
                                        flexDirection: 'row', alignItems: 'center',
                                        marginTop: '5%', paddingHorizontal: '20%',
                                        backgroundColor: 'white',
                                        shadowColor: 'black',
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 5,
                                        elevation: 3,

                                    }]}>
                                        <Icon name='camera' size={40} color="#45C654" />
                                        <Text style={[styles.back, { fontWeight: '600', paddingLeft: '10%', color: '#45C654' }]}>Take a photo</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={pickImage} style={[styles.iconContainer,
                                    {
                                        flexDirection: 'row', alignItems: 'center',
                                        marginTop: '5%', paddingHorizontal: '20%',
                                        backgroundColor: '#607986',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 5,
                                        elevation: 3,
                                    }]}>
                                        <Icon name='upload' size={40} color="white" />
                                        <Text style={[styles.back, { color: 'white', fontWeight: '600', paddingLeft: '10%' }]}>Upload a file</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}

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


    );


}


const viewWidth = Dimensions.get('window').width;

const specific = StyleSheet.create({

    image: {
        width: viewWidth,
        height: 200,
    },
});
export default HeaderPic;
