import { StyleSheet } from 'react-native';
import { normalize, SCREEN_WIDTH } from 'utils';
import { Colors, FONT_STYLE } from 'styles';

export const styles = StyleSheet.create({
  buttonDefaultStyle: {
    width: SCREEN_WIDTH - normalize(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(12),
    paddingVertical: normalize(14),
    paddingHorizontal: normalize(12),
  },
  textStyle: {
    ...FONT_STYLE.text_h5.regular,
    color: Colors.white,
  },
});
