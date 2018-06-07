function AhjoClient() {
    
    function test(a, b) {

        return "client: " + (a + b);
    }

    return {
        test: test
    };
}

export default AhjoClient;
