import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function QuestHub() {
  return (
    <View>
        <Text>
            Explore Tasks
        </Text>

        <ScrollView horizontal>
            <TouchableOpacity style={styles.task}> 
                <Text>Task 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.task}>
                <Text>Task 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.task}>
                <Text>Task 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.task}>
                <Text>Task 1</Text>
            </TouchableOpacity>
        </ScrollView>

        <Text>
            Communities and Guilds
        </Text>
        <ScrollView>
            <Text>
                Community Name
            </Text>
            <Text>
                Community Name
            </Text>
            <Text>
                Community Name
            </Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    taskHeader: {

    },
    task: {
        marginRight: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#ccc',
    }
})
