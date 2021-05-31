import RoomsData from '../data/RoomsData';
import DoorData from '../data/DoorData';
class ConvertData {
    // id of room contains light id
    roomID = {
        door: {
            "1": ["1"],
            "2": ["2", "3", "4"],
            "3": ["5,6"],
            "4": ["7,8"]
        },
        gas: {
            "1": ["1"],
            "2": ["2"],
        },
        humid: {
            "1": ["1"],
            "2": ["2"],
        },
        light: {
            "1": ["1"],
            "2": ["2"],
        }
    }

    roomsData = RoomsData;

    convert(topic, data){
        switch(topic){
            case "light": return this.convertLight(data); break;
            case "temp-humid": return this.convertTempHumid(data); break;
            case "magnetic": return this.convertMagnetic(data); break;
            case "gas": return this.convertGas(data); break;
        }
    }

    convertMagnetic(doorData) {
        return {
            "key": doorData.id,
            "name": "Door " + doorData.id,
            "room": this.getRoomID(this.roomID.door, doorData.id),
            "url": DoorData[doorData.id],
            "state": String(doorData.data)
        }
    }

    convertTempHumid(data) {
        const idx = this.getRoomID(this.roomID.humid, data.id);
        if (idx == -1) {
            throw new Error("Can't find room id");
        }
        if (data.split("-").length != 2) {
            throw new Error('Wrong data format');
        }
        const temp = data.split("-")[0];
        const humidity = data.split("-")[1];
        this.roomData[idx].humidity = humidity;
        this.roomData[idx].temperature = temp;
        return this.roomsData;
    }

    convertGas(gasData) {
        const idx = this.getRoomID(this.roomID.gas, gasData.id);
        if (idx == -1) {
            throw new Error("Can't find room id");
        }
        this.roomsData[idx].gasConcentration = gasData.data == 0? "Low" : "High";
        return this.roomsData;
    }

    convertLight(lightData) {
        const idx = this.getRoomID(this.roomID.light, lightData.id);
        if (idx == -1) {
            throw new Error("Can't find room id");
        }
        this.roomsData[idx].lightIntensity = lightData.data;
        return this.roomsData;
    }

    getRoomID(list, id) {
        for (var key in list) {
            const found = list[key].find(x => x == id);
            if (found) {
                return String(key);
            }
        }
        return -1;
    }
}

export var convertData = new ConvertData();