'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mobxStateTree = require('mobx-state-tree');
var express = _interopDefault(require('express'));

function RestEndpoint(targetModel) {

    function handleRESTrequest(request) {

    }

    return {
        requestHandler: handleRESTrequest
    }

}

const ServerModel = function(baseModel) {
    return mobxStateTree.types.compose(
        baseModel, 
        mobxStateTree.types.model({})
            .actions(self => ({
                
                
                
            }))
            .views(self => ({
                isAhjoModel: () => true
            }))
        );
};

const DEFAULT_OPTIONS$1 = {

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
    const options = Object.assign({}, DEFAULT_OPTIONS$1, userOptions);
    
    const expressServer = express();

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

exports.AhjoServer = AhjoServer;
exports.AhjoServerModel = ServerModel;
exports.AhjoRestEndPoint = RestEndpoint;
