(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ahjocore = factory());
}(this, (function () { 'use strict';

    function AhjoCore() {

        function test(a, b) {
            return a + b;
        }

        return {
            test: test
        };
    }

    return AhjoCore;

})));
