class ConvertRequest {
    convert(type, data) {
        switch(type) {
            case "led": return this.convertLed(data); break;
            case "light": return this.convertLight(data); break;
            case "humid": return this.convertHumid(data); break;
            case "magnetic": return this.convertMagnetic(data); break;
            case "gas": return this.convertGas(data); break;
            case "relay": return this.convertRelay(data); break;
        }
    }
    convertLed(data) {
        return data;
    }
    convertLight(data) {
        return {
            "id": data.key,
            "name": data.name.split(' ')[0],
            "data": data.state,
            "unit": ""
        }
    }
    convertHumid(data) {
        return {
            "id": data.key,
            "name": data.name.split(' ')[0],
            "data": data.state,
            "unit": ""
        }
    }
    convertMagnetic(data) {
        return {
            "id": data.key,
            "name": data.name.split(' ')[0],
            "data": data.state,
            "unit": ""
        }
    }
    convertGas(data) {
        return {
            "id": data.key,
            "name": data.name.split(' ')[0],
            "data": data.state,
            "unit": ""
        }
    }
    convertRelay(data) {
        return {
            "id": data.key,
            "name": "RELAY",
            "data": data.state,
            "unit": ""
        }
    }
}

export default new ConvertRequest();