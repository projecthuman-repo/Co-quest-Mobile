
import { View, Text, keyboardVerticalOffset, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { IconButton, TextInput } from "@react-native-material/core";
import React, { useState, useCallback } from 'react'
import Button from '../components/Button'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/styles';
import handlePress from '../components/handlePress';



function Signup({ navigation }) {

    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');


    const handleLoginPress = handlePress('Login', navigation);
    const handleSignUpPress = handlePress('Confirmation', navigation);


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View id="register" style={[styles.container]}>
                <View style={{ width: '90%' }}>
                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>


                        <Text style={styles.heading}>Sign up with your Project: Human City account</Text>


                        <View style={[styles.inputContainer]}>
                            <TextInput style={[styles.input]}
                                label="Full Name"
                                variant="outlined" type="text" id='name'
                                onChangeText={newText => setFullName(newText)}
                                color={'#000000'}
                                defaultValue={fullName}>
                            </TextInput>
                            <TextInput
                                label='Email Address'
                                variant="outlined" style={styles.input}
                                color={'#000000'} type="text" id='email'
                                onChangeText={newText => setEmail(newText)}
                                defaultValue={email}
                            ></TextInput>
                            <TextInput
                                label='Username'
                                variant="outlined"
                                style={styles.input}
                                type="text"
                                id='username'
                                color={'#000000'}
                                onChangeText={newText => setUsername(newText)}
                                defaultValue={username}
                            ></TextInput>
                            <TextInput
                                label='Password'
                                variant="outlined"
                                secureTextEntry={true}
                                style={styles.input}
                                type="Password"
                                id='password'
                                color={'#000000'}
                                onChangeText={newText => setPassword(newText)}
                                defaultValue={password}
                                trailing={props => (
                                    <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                                )}
                            ></TextInput>

                        </View>

                        <Text style={styles.tagline}>or</Text>

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: '10%', marginBottom: '10%', }}>
                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome name='facebook-square' size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome name='twitter' size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome name='instagram' size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome name='google' size={30} />
                            </TouchableOpacity>
                        </View>

                        <Button title="Sign Up" color="#26A5E7" textColor="white" onPress={handleSignUpPress} />

                        <Button title="Have an account? Login" color="none" textColor="#000000" onPress={handleLoginPress} />
                    </KeyboardAvoidingView>
                </View>
            </View >
        </TouchableWithoutFeedback >
    );

}



export default Signup;