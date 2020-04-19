import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Track List</Text>
      <Button title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetail')} />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

const styles = StyleSheet.create({});

export default TrackListScreen;
