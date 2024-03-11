import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NavBar from './NavBar';
import MovieList from './MovieList';
import {Image } from "react-native";

export default function App() {
  const trendingMovies = [
    {
      id: '1',
      title: 'Stranger Things',
      Image
    },
    {
      id: '2',
      title: 'Black Mirror',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Breaking Bad',
      imageUrl: 'https://via.placeholder.com/150',
    },
   
  ];

  const actionMovies = [
    {
      id: '4',
      title: 'The Dark Knight',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      title: 'Inception',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      title: 'Matrix',
      imageUrl: 'https://via.placeholder.com/150',
    },
  
  ];

  const comedyMovies = [
    {
      id: '7',
      title: 'The Hangover',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      title: 'Superbad',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '9',
      title: 'Anchorman',
      imageUrl: 'https://via.placeholder.com/150',
    },
  
  ];

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <MovieList movies={trendingMovies} title="Trending Now" />
        <MovieList movies={actionMovies} title="Action Movies" />
        <MovieList movies={comedyMovies} title="Comedy Movies" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
