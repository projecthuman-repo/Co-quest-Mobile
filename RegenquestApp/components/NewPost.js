import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DropDownPicker from 'react-native-dropdown-picker';

export default function NewPost() {
  // Initialize const variables

  const [open, setOpen] = useState(false);
  const [layers, setLayers] = useState([
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ])
  const [value, setValue] = useState(null);


  fetch('https://backend-api/userprofile-information', {
    method: 'GET'
  })

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <Icon name="account-circle" size={40} style={{ borderRadius: 25, marginRight: 10}}></Icon>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Username</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Enter the captions for your post.'

        ></TextInput>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton icon={props => <Icon name="camera" {...props} />} />
        <IconButton icon={props => <Icon name="microphone" {...props} />} />
        <IconButton icon={props => <Icon name="account-multiple-plus" {...props} />} />
        <IconButton icon={props => <Icon name="map" {...props} />} />
        <IconButton icon={props => <Icon name="share" {...props} />} />
      </View>

      <View style={{alignItems: 'center'}}>

        <DropDownPicker 
          open={open}
          value={value}
          items={layers}
          setOpen={setOpen}
          setValue={setValue}
          setLayers={setLayers}
          containerStyle={{ height: 40, width: 350, zIndex: 1 }}>

        </DropDownPicker>
      </View>

      

    </View >
  )
};


const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 100,
  },
});
