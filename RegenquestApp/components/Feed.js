import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import NewPost from './NewPost';
import Post from './Post'
import postImage from '../assets/postImage1.png';
import { ScrollView } from 'react-native-gesture-handler';
import { even, IconButton } from '@react-native-material/core';


const Feed = ({ navigation }) => {
    // Initialize const variables

    const [searchQuery, setSearchQuery] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleSearch = (query) => { 
        setSearchQuery(query); // Set the search input the useState variable
    };
    
    const handlePostButtonPress = () => { // const to handle the "New Post" action
        console.log('New Post button pressed');
        navigation.navigate('NewPost') // Navigates to the NewPost.js component
      };

    const handleScroll = (event) => { // Changes the position of the page when scrolling
      const position = event.nativeEvent.contentOffset.y;
      setScrollPosition(position);
    };

    const post = {
      id: 1,
      username: 'johndoe',
      profilePicture: postImage,
      photos: [postImage],
      likes: 10,
      comments: [
        {
          id: 1,
          username: 'janedoe',
          text: 'This is an awesome post!',
        },
        {
          id: 2,
          username: 'bobsmith',
          text: 'I love this!',
        },
      ],
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
            <Button title="New Post" onPress={handlePostButtonPress} style={{ marginRight: 10 }} />
          </View>
          <View style={styles.trendingLayer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.trendingTab}> 
                    <Text>Trending Layer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingTab}>
                    <Text>Trending Layer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingTab}>
                    <Text>Trending Layer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingTab}>
                    <Text>Trending Layer</Text>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.trendingTab}> 
                  <Text>Trending Layer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.trendingTab}>
                  <Text>Trending Layer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.trendingTab}>
                  <Text>Trending Layer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.trendingTab}>
                  <Text>Trending Layer</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

        
        <ScrollView>
          <Post
            id={post.id}
            username={post.username}
            profilePicture={post.profilePicture}
            photos={post.photos}
            likes={post.likes}
            comments={post.comments}
            navigation={navigation}
          />
        </ScrollView>
      </View>

     );
}
export default Feed;

const styles = StyleSheet.create({
  trendingTab: {
    marginRight: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  trendingLayer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
})
