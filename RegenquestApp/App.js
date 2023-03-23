import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from './screens/Initial';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PhoneVerification from './screens/PhoneVerification';
import EmailVertification from './screens/EmailVertification';
import PhoneOptIn from './screens/2FAOptIn';
import OptInCode from './screens/OptInCode';
import Bio from './screens/Bio';
import ConnectSocial from './screens/ConnectSocialMedia';
import ProfilePic from './screens/ProfilePic';
import HeaderPic from './screens/HeaderCreation';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="2Fa" component={PhoneVerification}></Stack.Screen>
        <Stack.Screen name="Confirmation" component={EmailVertification}></Stack.Screen>
        <Stack.Screen name="PhoneOptIn" component={PhoneOptIn}></Stack.Screen>
        <Stack.Screen name="Code" component={OptInCode}></Stack.Screen>
        <Stack.Screen name="Bio" component={Bio}></Stack.Screen>
        <Stack.Screen name='Connect' component={ConnectSocial}></Stack.Screen>
        <Stack.Screen name='PFP' component={ProfilePic}></Stack.Screen>
        <Stack.Screen name='Header' component={HeaderPic}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};