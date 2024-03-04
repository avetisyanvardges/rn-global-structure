import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const deviceInfo = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  appVersion: DeviceInfo.getVersion(),
  hasNotch: DeviceInfo.hasNotch(),
  OS: Platform.OS,
  ios: Platform.OS === 'ios',
  web: Platform.OS === 'web',
  android: Platform.OS === 'android',
  small_screen: Dimensions.get('window').height < 780,
};

export { deviceInfo };
