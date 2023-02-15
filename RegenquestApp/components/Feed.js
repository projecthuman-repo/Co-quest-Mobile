import React, {useState, useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';



function Feed() {
    const [searchQuery, setSearchQuery] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const handleSearch = (query) => {
        setSearchQuery(query) // Set the search input the useState variable
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
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchQuery} /* Specific styling can be added to a css file */
            />
            <Text>
                This is the Feed Section
            </Text>
        </View>
     );
}

export default Feed;