
import { View, Text, keyboardVerticalOffset, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { IconButton, TextInput } from "@react-native-material/core";
import React, { useState, useCallback } from 'react'
import Button from '../components/Button'
import { Icon } from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/styles';
import handlePress from '../components/handlePress';


function Login({ navigation }) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const handleSignupPress = handlePress('Signup', navigation);
    const handleNext = handlePress('2Fa', navigation);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View id="register" style={[styles.container]}>
                <View style={{ width: '80%' }}>
                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>


                        <Text style={styles.heading}>Login with your Project: Human City account</Text>


                        <View style={[styles.inputContainer]}>
                            <TextInput
                                label='Email Address'
                                variant="outlined" style={styles.input}
                                color={'#000000'} type="text" id='email'
                                onChangeText={newText => setEmail(newText)}
                                defaultValue={email}
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
                            // trailing={props => (
                            //     <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                            // )}
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

                        <Button title="Login" color="#26A5E7" textColor="white" onPress={handleNext} />
                        <Button title="No account? Sign up" color="none" textColor="#000000" onPress={handleSignupPress} />
                    </KeyboardAvoidingView>
                </View>
            </View >
        </TouchableWithoutFeedback >
    );

}



export default Login;