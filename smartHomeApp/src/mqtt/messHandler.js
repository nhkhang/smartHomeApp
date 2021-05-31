import AsyncStorage from '@react-native-community/async-storage';
import {convertData} from './ConvertData';
import { topicList } from './topics';
import LightData from '../data/LightData';
import DoorData from '../data/DoorData';
import RoomsData from '../data/DoorData';

class MessHandler {
    async init() {
        // Initialize mock data when app starts
        const initBefore = await retrieveData("initBefore");
        if (!initBefore) {
            AsyncStorage.setItem('initBefore', true);
            await storeData("light", LightData);
            await storeData("door", DoorData);
            await storeData("room", RoomsData);
        } else {
            const light = await retrieveData("light");
            console.log("Light: ", light);
        }
    }
    handleTempHumid(data) {
        data = convertData.convert("temp-humid", data);
        storeData("room", data);
    }
    handleLight(data) {
        data = convertData.convert("light", data);
        storeData("light", data);
    }
    handleGas(data) {
        data = convertData.convert("gas", data);
        storeData("room", data);
    }
    handleMagnetic(data) {
        data = convertData.convert("magnetic", data);
        storeData("room", data);
    }
    async getData(key){
        return retrieveData(key);
    }
}

const storeData = async (key, val) => {
    try {
        val = JSON.stringify(val);
        await AsyncStorage.setItem(key, val);
        console.log(`Storage store ${key} -`, val);
    } catch (error) {
        console.error(`Can't store data with key '${key}' and val '${val}: ${error}`);
    }
};

const updateData = async (key, val) => {
    try {
        const keyData = await retrieveData(key);
        storeData(key, val);
        // var array = await retrieveData(key);
        // if (!array) {
        //     throw new Error('Key is null');
        // } else {
        //     var converted = convertData.convert(key, JSON.parse(val));
        //     const idx = array.findIndex(data => data.key == converted.key);
        //     if (idx == -1)
        //         array.push(converted);
        //     else
        //         array[idx] = converted;
        //     storeData(key, array);
        // }
    }
    catch(err) {
        console.log(`Can't update data because: ` + err);
    }
}

const retrieveData = async (key) => {
    const value = await AsyncStorage.getItem(key);
    if (!value) {
        console.error("Key not exist", key);
    }
    return JSON.parse(value);
}

// const retrieveData = async (key) => {
//     try {
//       var value = await AsyncStorage.getItem(key);
//       if (value !== null) {
//         value = JSON.parse(value);
//         if (value != null){
//             console.log(`Empty array`);
//             return value;
//         }
//         value = JSON.parse(value);
//         console.log(`Retrieve ` + value + ` from ` + key);
//         return value;
//       } else {
//           return false;
//       }
//     } catch (error) {
//       console.error(`Can't get data with key '${key}': ${error}`);
//       return null;
//     }
// };

export default new MessHandler();