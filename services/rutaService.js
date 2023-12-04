import array from "../memory/memory";
import Validator from "../validator";

const validator = new Validator()

const get = (id) => {
    const found = array.find((element) => element.id = id)
    return found
}
const getAll = () => {
    const found = array
    return found
}
const create = (attr1,attr2) => {
    const object = {attr1,attr2}
    array.push(object)
}