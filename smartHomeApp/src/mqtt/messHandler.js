import AsyncStorage from '@react-native-community/async-storage';
import {convertData} from './ConvertData';
import { topicList } from './topics';
import DoorData from '../data/DoorData';
import LightData from '../data/LightData';
import RoomsData from '../data/RoomsData';
import Gas from '../screen/Gas';
 
class MessHandler {
    constructor(){        
        storeData("relay", LightData);
        storeData("door", DoorData);
        storeData("room", RoomsData);
    }
    handleRelay(data) {
        updateData("relay", data);
    }
    handleTempHumid(data) {
        updateData("temp-humid", data);
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
    async getData(key){
        return retrieveData(key);
    }
}

const sendDataToServer = (key, value) => {
    var val = JSON.parse(value);
    if (key == "temp-humid") 
        var data = {
            Temperature: val.data.split("-")[0],
            Humidity: val.data.split("-")[1]
        }
    else
        var data = {
            LightIntensity: val.data,
        }
    
    fetch('http://localhost:3000/updateHouseInfo' , { // Add your IP address here
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((response)=>response.json().then(data => {console.log(data);})
    .catch((error) =>{
        console.error(error);
    }));
}

const storeData = async (key, val) => {
    try {
        val = JSON.stringify(val);
        if (key == "magnetic") key = "door";
        else if (key == "gas" || key == "temp-humid" || key == "light") key = "room";
        await AsyncStorage.setItem(key, val);
        console.log(`Storage store ${key} -`, val);
    } catch (error) {
        console.error(`Can't store data with key '${key}' and val '${val}: ${error}`);
    }
};

const updateData = async (key, val) => {
    try{
        if (key == "temp-humid" || key == "light") sendDataToServer(key, val);
        var array = await retrieveData(key);
        var converted = convertData.convert(key, JSON.parse(val));
        const idx = array.findIndex(data => data.key == converted.key);
        array[idx] = converted;
        storeData(key, array);
    }
    catch(err) {
        console.log(`Can't update data because: ` + err);
    }
}

const retrieveData = async (key) => {
    try {
        if (key == "magnetic") key = "door";
        else if (key == "gas" || key == "temp-humid" || key == "light") key = "room";
        var value = await AsyncStorage.getItem(key);
        if (value !== null) {
            value = JSON.parse(value);
            console.log(`Retrieve from ` + key);
            return value;
        }
    } catch (error) {
        // Error retrieving data
        console.error(`Can't get data with key '${key}': ${error}`);
        return null;
    }
}

export default new MessHandler();