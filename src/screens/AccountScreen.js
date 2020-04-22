import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.title} h3>
        Accounts
      </Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name='gear' size={20} />,
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default AccountScreen;
