import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>Netflix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#000',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  navBarTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
