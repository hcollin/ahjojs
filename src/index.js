
import AhjoCore from './core/AhjoCore';
import AhjoServer from './server/AhjoServer';

function ahjoTest(a, b) {
    return a + b;
}

const Core = AhjoCore();

module.exports = { 
    ahjoTest: Core.test,
    server: AhjoServer
};