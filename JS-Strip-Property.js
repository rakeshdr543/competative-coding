function stripProperty(obj, prop) {
    // write your code here
    const newObj={...obj}
    delete newObj[`${prop}`]
    return newObj;
}