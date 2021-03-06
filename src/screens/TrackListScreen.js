import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  if (state.length < 1) {
    return (
      <>
        <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>
        {/* <Text style={styles.title} h3>
          Track List
        </Text> */}
        <Text style={styles.title} h3>
          Add track
        </Text>
      </>
    );
  } else {
    return (
      <>
        <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
              >
                <ListItem bottomDivider chevron={true} title={item.name} />
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  }
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default TrackListScreen;
