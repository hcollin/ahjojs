
const DEFAULT_OPTIONS = {

    test: true
};

function RestEndpoint(targetModel) {
    
    const model = targetModel;

    function handleRESTrequest(request) {

    }

    return {
        requestHandler: handleRESTrequest
    }

}

export default RestEndpoint;