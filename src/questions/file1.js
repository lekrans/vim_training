function thisIsMyFunc(something) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            console.log('hej');
        }
    }
}