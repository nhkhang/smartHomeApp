import AsyncStorage from '@react-native-community/async-storage';
import ConvertData from './ConvertData';
import { topicList } from './topics';

class MessHandler {
    init(data){
        var topics = ["led", "door", "room"];
        topics.map(topic => storeData(topic, data));
    }
    handleLed(data) {
        updateData("led", data);
    }
    handleHumid(data) {
        updateData("humid", data);
    }
    handleLight(data) {
        updateData("light", data);
    }
    handleGas(data) {
        updateData("gas", data);
    }
    handleMagnetic(data) {
        updateData("magnetic", data);
    }
    getData(key){
        return retrieveData(key);
    }
}

const storeData = async (key, val) => {
    try {
        val = JSON.stringify(val);
        if (key == "magnetic") key = "door";
        else if (key == "gas" || key == "humid" || key == "light") key = "room";
        await AsyncStorage.setItem(key, val);
        console.log(`Storage store ${key} -`, val);
    } catch (error) {
        // Error saving data
        console.error(`Can't store data with key '${key}' and val '${val}: ${error}`);
    }
};

const updateData = async (key, val) => {
    try{
        var array = await retrieveData(key);
        var converted = ConvertData.convert(key, JSON.parse(val));
        const idx = array.findIndex(data => data.key == converted.key);
        if (idx == -1)
            array.push(converted);
        else
            array[idx] = converted;
        storeData(key, array);
    }
    catch(err) {
        console.log(`Can't update data because: ` + err);
    }
}

const retrieveData = async (key) => {
    try {
      var value = await AsyncStorage.getItem(key);
      if (value !== null) {
        value = JSON.parse(value);
        if (value != null){
            console.log(`Empty array`);
            return value;
        }
        value = JSON.parse(value);
        console.log(`Retrieve ` + value + ` from ` + key);
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.error(`Can't get data with key '${key}': ${error}`);
      return null;
    }
};

export default new MessHandler();