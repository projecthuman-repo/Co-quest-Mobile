import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from './screens/Initial';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PhoneVerification from './screens/PhoneVerification';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};