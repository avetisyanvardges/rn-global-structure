import React from 'react';
import { Text } from 'react-native';
import { Styles } from './style';
import { t } from 'i18next';

const MText = ({
  children,
  globalStyle,
  ellipsizeMode,
  numberOfLines,
  onPress,
  values,
  translate = false,
}) => {
  const styles = Styles();
  return (
    <Text
      onPress={onPress}
      style={[styles.font, globalStyle]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {translate ? t(children, values) : children}
    </Text>
  );
};

export { MText };
