import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getRecentMovie } from '../services/MovieServices';
import { Movie } from '../types';
import MovieComponent from './MovieComponent';

export default function FlatListComponent(props: any) {
  const [moviesList, setMoviesList] = useState([] as Movie[]);
  const [pageNumber, setPageNumber] = useState(2);
  
  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus',async () =>{
      setMoviesList(await getRecentMovie(1, props.type));
    });
    return()=>{
      unsubscribe;
    }
  }, [props.navigation]);

  async function getData(){
    const newMovie = await getRecentMovie(pageNumber, props.type);
    setMoviesList(moviesList.concat(newMovie));
  }

  return (
    <View style={styles.container}>
      {moviesList.length == 0 ?
        <ActivityIndicator>
        </ActivityIndicator>
        :
        <FlatList
          data={moviesList}
          renderItem={(object: any) => MovieComponent(object, props.navigation)}
          keyExtractor={(item: Movie) => item.id.toString()}
          numColumns={3}
          onEndReached={()=>{getData(); setPageNumber(pageNumber+1)}}
        >
        </FlatList>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
