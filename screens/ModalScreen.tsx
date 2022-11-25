import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet , Image, Dimensions} from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Movie } from '../types';
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function ModalScreen({route, navigation}: {route: any, navigation:any}) {
  const movie = route.params.movie as Movie
  const titre = movie.title
  const overview = movie.overview
  const release_date = movie.release_date
  const image = movie.poster_path

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titre}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.containerInfo}>{overview}</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Image style={styles.containerImage} source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.poster_path}` }} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    marginBottom: 100,
    marginLeft: 5,
    marginRight: 5,
    height: WINDOW_WIDTH * 0.6,
    width: WINDOW_WIDTH * 0.4,
    shadowOffset: {
      width: 5,
      height: 5
    },
    borderRadius: 5,
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
