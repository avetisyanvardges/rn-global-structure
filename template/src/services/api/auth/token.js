import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAuthToken = async token => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Error storing api token:', error);
    throw new Error('Failed to store api token');
  }
};

const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.error('Error getting api token:', error);
    throw new Error('Failed to get api token');
  }
};

const clearAuthToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
  } catch (error) {
    console.error('Error clearing api token:', error);
    throw new Error('Failed to clear api token');
  }
};

export { storeAuthToken, getAuthToken, clearAuthToken };
