
import Configuration from './Config';

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

export default AhjoCore;