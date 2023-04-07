import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const Profile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{ uri: 'https://your-profile-image-url.com' }} />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.username}>@yourusername</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statName}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statName}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statName}>Following</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginTop: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: 'gray',
  },
  stats: {
    flexDirection: 'row',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statName: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Profile;
