import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPost from './components/NewPost';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegenQuest" component={BottomNavBar}></Stack.Screen>
        <Stack.Screen name="NewPost" component={NewPost}></Stack.Screen>
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
