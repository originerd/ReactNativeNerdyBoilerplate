import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const LoginScreen = () => (
  <View style={styles.container}>
    <Text>{"It's login screen."}</Text>
  </View>
);

LoginScreen.navigationOptions = {
  title: 'Login',
};

export default LoginScreen;
