// The view/component of a singular post on the user feed
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Post({ profilePic, username, photos, likes }) {
  const [showComments, setShowComments] = useState(false);
  const comments = ['Comment 1', 'Comment 2', 'Comment 3'];

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
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{likes} likes</Text>
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
