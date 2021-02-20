import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:authToken`,
    );  
    return token? token : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:authToken`,
      accessToken,
    );    
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:authToken`);
  }
}

export default AuthStorage;