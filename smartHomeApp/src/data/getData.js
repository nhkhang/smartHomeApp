import messHandler from '../mqtt/messHandler';
export default function getData(key){
    return messHandler.getData(key);
}