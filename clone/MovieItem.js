import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieItem({ title, imageUrl }) {
  return (
    <View style={styles.movieItem}>
      <Image source={{ uri: imageUrl }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movieItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  movieImage: {
    width: 150,
    height: 225,
    marginBottom: 5,
  },
  movieTitle: {
    color: '#FFF',
  },
});
