import React from 'react';
import { View } from 'react-native';
import { useContainer } from 'screens/AuthLayer/Login/hook';
import { Styles } from './styles';
import { MButton, MText } from 'components';

const LoginScreen = () => {
  const { handleLoginAction } = useContainer();
  const styles = Styles();
  return (
    <View style={styles.container}>
      <MText>LOGIN SCREEN</MText>
    </View>
  );
};

export { LoginScreen };
