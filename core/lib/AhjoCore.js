(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ahjocore = factory());
}(this, (function () { 'use strict';

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

    function AhjoCore() {


        const configurationInstance = new Configuration();

        function test(a, b) {
            return a + b;
        }

        return {
            test: test,
            config: configurationInstance
        };
    }

    return AhjoCore;

})));
