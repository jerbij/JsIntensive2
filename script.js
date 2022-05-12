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

const myObject = {
    from: 1,
    to: 4,

    [Symbol.iterator]: function () {

        if ( ( this.from === undefined || this.to === undefined)
            || (isNaN(this.from) || isNaN(this.to) )
            || (this.to < this.from)
        ) {
            throw Error("from or to is invalid");
        } else {
            let self = this;
            return {
                current: self.from,
                next: function () {
                    return {
                        done: !(this.current <= self.to),
                        value: this.current++
                    }
                }
            }
        }
    }
}
