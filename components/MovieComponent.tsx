import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { Movie } from '../types';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function MovieComponent() {
  let movie = object.item as Movie;
  
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Modal', { movie: movie})}}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w1280/${movie.poster_path}` }} />
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{movie.title ? movie.title : movie.name}</Text>
          <Text style={styles.date}>{movie.release_date ? movie.release_date : movie.first_air_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: WINDOW_WIDTH * 0.5,
    width: WINDOW_WIDTH * 0.3,
    shadowOffset: {
      width: 5,
      height: 5
    },
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  containerInfo: {
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 5,
    paddingLeft: 2,
    paddingRight: 2,
  },
  image: {
    flex: 2
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10
  }
});