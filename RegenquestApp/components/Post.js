// The view/component of a singular post on the user feed
import { IconButton } from '@react-native-material/core';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CommentsView from './Comments';


export default function Post({ profilePic, username, photos, likes, navigation }) {
  const [showComments, setShowComments] = useState(false);
  const comments = ['Comment 1', 'Comment 2', 'Comment 3'];
  const [numLikes, setNumLikes] = useState(likes); // Stores and sets the number of likes shown on the post from <likes> arguement
  const [isLiked, setIsLiked] = useState(false); // State of whether the user has liked or not liked the post yet


  
  const HandlePressComment = () => {
    console.log('View comments pressed.');
    navigation.navigate('Comments');
  }

  const handleLike = () => {
    if (!isLiked) {
      setNumLikes(numLikes + 1); // Add a like
      setIsLiked(true); // Post has already been liked, therefore can't be liked again
    }

    else {
      setNumLikes(numLikes - 1); // Takeaway a like
      setIsLiked(false); // Post has already been liked, therefore can be unliked
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.photosContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={photo} style={styles.photo} />
        ))}
      </View>
      <View style={styles.buttonView}>
        <IconButton icon={props => <Icon name="cards-heart-outline" {...props} onPress={handleLike}/>} />
        <IconButton icon={props => <Icon name="comment-outline" {...props} onPress={HandlePressComment}/>} />
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{numLikes} likes</Text>
      </View>
      <TouchableOpacity style={styles.commentsButton} onPress={() => setShowComments(!showComments)}>
        <Text style={styles.commentsButtonText}>View comments</Text>
      </TouchableOpacity>
      {showComments && (
        <View style={styles.commentsContainer}>
          {comments.map((comment, index) => (
            <Text key={index} style={styles.comment}>
              {comment}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  photo: {
    flex: 1,
    aspectRatio: 1,
    marginRight: 5,
    marginBottom: 5,
  },
  buttonView: {
    flexDirection: 'row'
  },    
  likesContainer: {
    marginVertical: 5,
  },
  likes: {
    fontWeight: 'bold',
  },
  commentsButton: {
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 5,
  },
  commentsButtonText: {
    fontWeight: 'bold',
  },
  commentsContainer: {
    marginVertical: 5,
  },
  comment: {
    marginVertical: 5,
  },
});
