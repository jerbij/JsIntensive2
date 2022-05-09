function makeObjectDeepCopy(source){
    if (typeof source !== 'object' || source === null) {
        return source;
    }

    let destination;

    if (Array.isArray(source)) {
        destination = [];
    } else {
        destination = {};
    }

    for (let key in source) {
        const currentElement = source[key];
        destination[key] = makeObjectDeepCopy(currentElement);
    }

    return destination;
}
