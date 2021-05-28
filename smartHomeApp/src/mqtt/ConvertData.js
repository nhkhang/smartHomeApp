import messHandler from './messHandler';

class ConvertData {

    // id of room contains light id
    roomID = {
        light: {
            "1": ["1","2","3","4"],
            "2": ["5","6","7","8"],
            "3": ["9"],
            "4": ["10"]
        },
        door: {
            "1": ["1"],
            "2": ["2", "3", "4"],
            "3": ["5,6"],
            "4": ["7,8"]
        }
    }

    convertLight(lightData) {
        return {
            "key": lightData.id,
            "name": lightData.name + lightData.id,
            "room": this.getRoomID(this.roomID.light, lightData.id),
            "state": lightData.data,
            "Intensity": String(lightData.data),
        }
    }   

    convertDoor(doorData) {
        return {
            "key": doorData.id,
            "name": "Door " + doorData.id,
            "room": this.getRoomID(this.roomID.door, doorData.id),
            "url": "https://noithatroyal.vn/uploads/details/2019/12/images/2e801cca4482a2dcfb93.jpg",
            "state": String(doorData.data)
        }
    }

    convertHumid(humidData) {

    }

    convertGas(gasData) {
        
    }

    getRoomID(list, id) {
        for (var key in list) {
            const found = list[key].find(x => x == id);
            if (found) {
                return String(key);
            }
        }
    }
}

export default new ConvertData();