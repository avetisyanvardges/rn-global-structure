import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Colors } from 'styles';
import { MText } from 'components/MText';

function MButton({
  title = '',
  icon = '',
  onPress,
  containerStyle = {},
  textStyle = {},
  disabled = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.buttonDefaultStyle,
        ...containerStyle,
        backgroundColor: disabled
          ? Colors.gray_iron['300']
          : Colors.orange['500'],
      }}
      disabled={disabled}>
      {icon}
      <MText
        children={title}
        globalStyle={{ ...styles.textStyle, ...textStyle }}
      />
    </TouchableOpacity>
  );
}

export { MButton };
