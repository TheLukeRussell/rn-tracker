import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text>Accounts</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({});

export default AccountScreen;
