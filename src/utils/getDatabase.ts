import {Shape} from '../utils/interface'
import fs from 'fs'
import path from 'path';


export let data:Shape[] = database()
function database() {
    try {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../database/db.json'), 'utf8'))
    } catch (err) {
        return []
    }
}

function writeDataToFile(content: Shape[]) {
    return fs.writeFileSync(path.join(__dirname, '../database/db.json'), JSON.stringify(content, null, 2), "utf8");
}

export function pushToDatabase(value: Shape) {
    if (!data) {
        writeDataToFile([value])
    } else {
        data.push(value)
        writeDataToFile(data)
    }
}