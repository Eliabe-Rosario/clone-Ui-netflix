import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  const renderMovieItem = ({ item }) => (
    <MovieItem title={item.title} imageUrl={item.imageUrl} />
  );

  return (
    <View style={styles.movieListContainer}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movieListContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});
