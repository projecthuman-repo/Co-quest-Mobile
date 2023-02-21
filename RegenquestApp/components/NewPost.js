import React, {useEffect, useState, useRef} from 'react'
import { View, Text, TextInput, StyleSheet, Modal, Image } from 'react-native'
import { IconButton, lastChild } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import {Camera, CameraType} from 'expo-camera';


export default function NewPost() {
  // Initialize const variables

  const [open, setOpen] = useState(false);
  const [layers, setLayers] = useState([
    { label: 'Entertainment', value: 'option1' },
    { label: 'Sports', value: 'option2' },
    { label: 'Charity', value: 'option3' },
  ])
  const [value, setValue] = useState(null);
  const [cameraType, setType] = useState(CameraType.back);
  const [cameraVisibile, setCameraVisibile] = useState(false); 
  const [image, setImage] = useState(null); // Sets and stores the image taken from the photo gallery
  const [photo, setPhoto] = useState(null); // Stores the photo taken by the camera
  
  const launchGallery = async () => { // Function used to open the user's gallery
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4,3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const toggleCameraModal = () => {
    setCameraVisibile(prevVisibile => !prevVisibile);
  }

  const launchCamera = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  }



 
  /*fetch('https://backend-api/userprofile-information', {
    method: 'GET'
  }) */

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
        <Icon name="account-circle" size={40} style={{ borderRadius: 25, marginRight: 10}}></Icon>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Username</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter the captions for your post.'
          multiline={true}
          textAlignVertical='top'
          numberOfLines={7}

        ></TextInput>
      </View>

      <View style={styles.photosContainer}> 
        {photo && <Image source={{uri: photo}} style={{width: 200, height: 200}} />}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
        <IconButton icon={props => <Icon name="camera" {...props} />} onPress={toggleCameraModal}/>
        <IconButton icon={props => <Icon name="image-plus" {...props}/>} onPress={launchGallery}/>
        <IconButton icon={props => <Icon name="microphone" {...props} />} />
        <IconButton icon={props => <Icon name="account-multiple-plus" {...props} />} />
        <IconButton icon={props => <Icon name="map" {...props} />} />
        <IconButton icon={props => <Icon name="share" {...props} />} />

        <Modal visible={cameraVisibile} animationType="slide">
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={cameraType} ref={cameraRef}/>
            <View style={styles.cameraButtonContainer}>
              <IconButton icon={props => <Icon name="camera-flip-outline" {...props}/>} onPress={launchCamera}/>
              <IconButton icon={props => <Icon name="camera-control" {...props}/>} onPress={takePhoto}/>
              <IconButton icon={props => <Icon name="exit-to-app" {...props}/>} onPress={toggleCameraModal}/>
            </View>
          </View>
        </Modal>

      </View>

      <View style={{alignItems: 'center', marginBottom: 30}}>
        <DropDownPicker 
          open={open}
          value={value}
          items={layers}
          setOpen={setOpen}
          setValue={setValue}
          setLayers={setLayers}
          containerStyle={{ height: 40, width: 350, zIndex: 1 }}
          placeholder="Select a layer">

        </DropDownPicker>
      </View>

      <View>
        <Text style={{marginHorizontal: 20}}> Additional Settings </Text>
        
      </View>

    </View >
  )
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    height: 100,
    
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
  cameraButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  photosContainer: {
    alignItems: 'center',
    margin: 10
  },  
});
