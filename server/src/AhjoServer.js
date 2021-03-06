import express from 'express';

import RestEndPoint from './RestEndpoint';
import ServerModel from './mst/ServerModel';

const DEFAULT_OPTIONS = {

    // This is the port where the server is listening for calls
    port: 3000,

    // Static assets are in this directory
    assets: '/assets/',

    // Api calls are always called with /api/ route. Other routes are returned back to the client
    api: '/api',

    // Ahjo client is located in this directory
    client: '/client/'
};

/**
 * Ahjo Server
 * 
 * Ahjo server takes a large options object.
 * 
 * @param {*} options 
 */
function AhjoServer(userOptions={}) {
    
    // Create options set by combining both defaults and user options.
    const options = Object.assign({}, DEFAULT_OPTIONS, userOptions);
    
    const expressServer = express();
    
    const endPoints = {};

    function apiCallHandler(request, response, next) {
        console.log("API CALL!", request);
        return response;
    }

    /**
     * Start Express server that handles serving both Ahjo Client and works as an API
     * @param {*} atPort This is the port that it is ran at
     * 
     */
    function startExpressServer(atPort=false) {
        const port = atPort ? atPort : options.port ? options.port : 3000;
        expressServer.listen(port, () => {
            console.log("Server started at port " + port);
            expressServer.use(options.api, apiCallHandler);
        });
    }

    /**
     * Add new API end point for the server.
     * @param {*} model 
     * @param {*} options 
     */
    function addEndPointToServer(key, endPoint) {
        endPoints[key] = endPoint;
    }

    /**
     * Stop express server if it is running
     */
    function stopExpressServer() {

    }


    return {
        start: startExpressServer,
        stop: stopExpressServer,
        endPoint: addEndPointToServer
    }
}

export {
    AhjoServer as AhjoServer,
    ServerModel as AhjoServerModel,
    RestEndPoint as AhjoRestEndPoint
};
