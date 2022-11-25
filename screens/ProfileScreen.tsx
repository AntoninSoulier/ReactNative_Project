import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet , Image, Dimensions, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Movie, RootTabScreenProps } from '../types';
import * as ImagePicker from 'expo-image-picker';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) { 
    const [profilePicture, setProfilePicture] = useState("https://secure.gravatar.com/avatar/8f6b192e1fe07f9daa3e62981d845fcf?s=512&d=mm&r=g%22");
  return (
    
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{changeProfilePicture()}}>
          <Image style = {styles.containerImage} source = {{uri : profilePicture}}></Image>
        </TouchableOpacity>
    </View>
  );

  async function changeProfilePicture() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry');
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      saveChangePhoto(result.uri);
    }
  }

function saveChangePhoto(uri: any) {
    setProfilePicture(uri);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerImage: {
    marginBottom: 350,
    marginLeft: 5,
    marginRight: 5,
    height: WINDOW_WIDTH * 0.3,
    width: WINDOW_WIDTH * 0.3,
    shadowOffset: {
      width: 5,
      height: 5
    },
    borderRadius: 50,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  containerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight:10,
    fontSize: 15,
    fontWeight: 'bold',
  },

});

