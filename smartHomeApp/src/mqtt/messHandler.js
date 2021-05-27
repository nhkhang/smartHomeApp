import dataConverter from './mqttDataConverter';
import AsyncStorage from '@react-native-community/async-storage';

class MessHandler {
    handleLed(data) {
        console.log("handle led", data);
        storeData('led', data);
        setTimeout(()=>{
            retrieveData('led');
        }, 3000);
    }
    handleHudmid(data) {
        console.log("handle");
    }
    handleLight(data) {
        console.log("handle");
    }
    handleGas(data) {
        console.log("handle");
    }
    handleMagnetic(data) {
        console.log("handle");
    }
}

const storeData = async (key, val) => {
    try {
        console.log(`Storage store ${key} -`, val);
        val = JSON.stringify(val);
        await AsyncStorage.setItem(key, val);
    } catch (error) {
        // Error saving data
        console.error(`Can't store data with key '${key}' and val '${val}: ${error}`);
    }
};

const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        value = JSON.parse(value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.error(`Can't get data with key '${key}': ${error}`);
    }
};

export default new MessHandler();