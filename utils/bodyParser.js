const requestBodyParser = (data) => {
    let keys = Object.keys(data);
    let update = {};

    for(let key of keys){
        if(data[key] !== null){
            update[key] = data[key];
        }
    }

    return update;
}

module.exports = requestBodyParser;
