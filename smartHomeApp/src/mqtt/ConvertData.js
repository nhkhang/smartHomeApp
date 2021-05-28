class ConvertData {

    // id of room contains light id
    roomID = {
        led: {
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

    roomsData = [
        {
            "key": "1",
            "name": "Living room",
            "url": "https://noithatroyal.vn/uploads/details/2019/12/images/2e801cca4482a2dcfb93.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "2",
            "name": "Kitchen",
            "url": "https://c1.staticflickr.com/9/8725/28609601352_59ebbba9b5_o.png",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "3",
            "name": "Bedroom 1",
            "url": "https://cdn.mos.cms.futurecdn.net/sbj3Y757EZpEFw4adsVVs8-768-80.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "4",
            "name": "Bedroom 2",
            "url": "https://assets.blog.hgtv.ca/wp-content/uploads/2020/07/27141435/creative-bedroom-upgrades-feature.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "5",
            "name": "Bedroom 2",
            "url": "https://assets.blog.hgtv.ca/wp-content/uploads/2020/07/27141435/creative-bedroom-upgrades-feature.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "6",
            "name": "Bedroom 2",
            "url": "https://assets.blog.hgtv.ca/wp-content/uploads/2020/07/27141435/creative-bedroom-upgrades-feature.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
        {
            "key": "7",
            "name": "Bedroom 2",
            "url": "https://assets.blog.hgtv.ca/wp-content/uploads/2020/07/27141435/creative-bedroom-upgrades-feature.jpg",
            "lightIntensity": "40",
            "temperature": "27℃",
            "humidity": "50%",
            "gasConcentration": "low"
        },
    ];

    convert(topic, data){
        switch(topic){
            case "led": return this.convertLed(data); break;
            case "light": return this.convertLight(data); break;
            case "humid": return this.convertHumid(data); break;
            case "magnetic": return this.convertMagnetic(data); break;
            case "gas": return this.convertGas(data); break;
        }
    }

    convertLed(ledData) {
        return {
            "key": ledData.id,
            "name": ledData.name + ledData.id,
            "room": this.getRoomID(this.roomID.light, ledData.id),
            "state": ledData.data,
            "Intensity": String(ledData.data),
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
        const idx = this.getRoomID(this.roomID.humid, humidData.id);
        this.roomData[idx].humidity = humidData.data;
        return this.roomsData[idx];
    }

    convertGas(gasData) {
        const idx = this.getRoomID(this.roomID.humid, gasData.id);
        this.roomsData[idx].gasConcentration = gasData.data == 0? "Low" : "High";
        return this.roomsData[idx];
    }

    convertLight(lightData){
        const idx = this.getRoomID(this.roomID.humid, lightData.id);
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
    }
}

export default new ConvertData();