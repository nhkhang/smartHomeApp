import RoomsData from '../data/RoomsData';
import DoorData from '../data/DoorData';
class ConvertData {
    // id of room contains light id
    roomID = {
        relay: {
            "1": ["1", "2", "3"],
            "2": ["4", "5"],
            "3": ["6", "7", "8"],
            "4": ["9", "10"]
        },
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
            "1": ["1"], // Room {1} have humid sensor with id {1}
            "2": ["2"],
        },
        light: {
            "1": ["1"],
            "2": ["2"],
        },
    }

    roomsData = RoomsData;

    convert(topic, data){
        switch(topic){
            case "relay": return this.convertRelay(data); break;
            case "light": return this.convertLight(data); break;
            case "temp-humid": return this.convertHumid(data); break;
            case "magnetic": return this.convertMagnetic(data); break;
            case "gas": return this.convertGas(data); break;
        }
    }
    convertRelay(relayData) {
        return {
            "key": relayData.id,
            "name": relayData.name + relayData.id,
            "room": this.getRoomID(this.roomID.relay, relayData.id),
            "state": relayData.data,
        }
    }   
    convertMagnetic(doorData) {
        return {
            "key": doorData.id,
            "name": "Door " + doorData.id,
            "room": this.getRoomID(this.roomID.door, doorData.id),
            "url": DoorData[doorData.id].url,
            "state": String(doorData.data)
        }
    }

    convertHumid(humidData) {
        const idx = this.getRoomID(this.roomID.humid, humidData.id) - 1;
        this.roomsData[idx].humidity = humidData.data + humidData.unit;
        return this.roomsData[idx];
    }

    convertGas(gasData) {
        const idx = this.getRoomID(this.roomID.gas, gasData.id) - 1;
        this.roomsData[idx].gasConcentration = gasData.data == 0? "low" : "high";
        return this.roomsData[idx];
    }

    convertLight(lightData){
        const idx = this.getRoomID(this.roomID.light, lightData.id) - 1;
        this.roomsData[idx].lightIntensity = lightData.data;
        return this.roomsData[idx];
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