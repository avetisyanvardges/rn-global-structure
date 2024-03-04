import { Dimensions, PixelRatio } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const scale = SCREEN_WIDTH / 360;
const scaleHeight = SCREEN_HEIGHT / 800;

const normalize = (size, forHeight) => {
  const newSize = size * (forHeight ? scaleHeight : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export { SCREEN_WIDTH, SCREEN_HEIGHT, normalize };
