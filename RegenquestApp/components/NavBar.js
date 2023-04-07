import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Search from './Search';
import QuestHub from './QuestHub';
import Profile from './Profile';

const Tab = createBottomTabNavigator()

function BottomNavBar() {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='QuestHub' component={QuestHub}/>
            <Tab.Screen name='Layers' component={Feed}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
     );
}

export default BottomNavBar;