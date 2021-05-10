import {data} from './getDatabase'

let ID
export function createID() {
    if (!data.length) {
        return ID = 1
    } else {
        return ID = data[data.length - 1].id + 1
    }
}