import { StyleSheet } from 'react-native';
import { Colors, FONTS } from 'styles';

const Styles = () => {
  return StyleSheet.create({
    font: {
      fontFamily: FONTS.regular,
      color: Colors.gray_cool['500'],
    },
  });
};

export { Styles };
