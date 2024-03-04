import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './style';

function HomeScreen(props) {
  const styles = Styles();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export { HomeScreen };
