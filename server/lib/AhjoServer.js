'use strict';

require('express');

function AhjoServer() {


    function setServer(ahjoServer) {
        console.log("SERVER", ahjoServer);
        return this;
    }

    function setDatabase(ahjoDb) {
        return this;
    }

    return {
        setServer: setServer,
        setDatabase: setDatabase
    }
}

module.exports = AhjoServer;
