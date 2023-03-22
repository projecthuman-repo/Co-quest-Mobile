import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Search from './Search';


const Tab = createBottomTabNavigator()

function BottomNavBar() {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='QuestHub' component={Feed}/>
            <Tab.Screen name='MyCity' component={Feed}/>
            <Tab.Screen name='Profile' component={Feed}/>
        </Tab.Navigator>
     );
}

export default BottomNavBar;