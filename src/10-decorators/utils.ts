function debug(myClass: unknown) {
    console.log(myClass);
}

function log(constructor: any) {
    return class extends constructor {
        created_at: Date = new Date();
    }
}

export {
    debug,
    log,
}
