import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from './screens/Initial';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

export default function App() {

  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >

  </Stack.Navigator>
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
        {/* <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});