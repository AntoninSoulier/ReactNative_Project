import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Movie } from '../types';

export function getRecentMovie(page:number, tvOrMovie: string): Promise<Movie[]>{
    const options ={
        method: 'GET'
    }
    return fetch(`https://api.themoviedb.org/3/${tvOrMovie}/popular?api_key=c274f5d0ce0549286045f2f7ddbc6d10&language=fr&page=${page}`, options)
    .then(response => response.json())
    .then(response => {return response.results});
}