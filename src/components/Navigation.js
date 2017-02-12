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

const Navigation = () => (
  <View style={styles.container}>
    <Text>{"It's navigation."}</Text>
  </View>
)

export default Navigation;
