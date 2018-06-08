




function Configuration() {

    const configs = {};


    function set(key, value) {
       
        configs[key] = value;
    }

    function get(key, value) {
        return configs[key];
    }

    function setMany(newConfigsObject) {
        configs = Object.assign({}, configs, newConfigsObject);
    }

    return {
        set: set,
        get: get,
        init: setMany
    }
}

export default Configuration;