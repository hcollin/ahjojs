import express from 'express';

function AhjoServer() {

    let server = null;
    let db = null;


    function setServer(ahjoServer) {
        server = ahjoServer;
        console.log("SERVER", ahjoServer);
        return this;
    }

    function setDatabase(ahjoDb) {
        db = ahjoDb;
        return this;
    }

    return {
        setServer: setServer,
        setDatabase: setDatabase
    }
}


export default AhjoServer;