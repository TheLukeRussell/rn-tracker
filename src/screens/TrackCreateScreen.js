// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <View>
      {/* <SafeAreaView forceInset={{ top: 'always' }}> */}
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
      {/* </SafeAreaView> */}
    </View>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default withNavigationFocus(TrackCreateScreen);
