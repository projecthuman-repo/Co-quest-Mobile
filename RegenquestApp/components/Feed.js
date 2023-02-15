import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPost from './NewPost';

const Feed = ({ navigation }) => {
    // Initialize const variables

    const [searchQuery, setSearchQuery] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const handleSearch = (query) => { 
        setSearchQuery(query); // Set the search input the useState variable
    };
    
    const handleButtonPress = () => { // const to handle the "New Post" action
        console.log('New Post button pressed');
        navigation.navigate('NewPost') // Navigates to the NewPost.js component
      };

    
    /*
    useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch('https://backend-api/posts');
              const data = await response.json();
              setPosts(data);
              setLoading(false);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchData();
        }, [])

    */


    return ( 
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, flex: 1 }}
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchQuery}
                />
                <Button title="New Post" onPress={handleButtonPress} style={{ marginRight: 10 }} />
        </View>
        <Text>
            This is the feed section
        </Text>
      </View>

     );
}

export default Feed;