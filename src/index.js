
import AhjoCore from './core/AhjoCore';


function ahjoTest(a, b) {
    return a + b;
}

const Core = AhjoCore();


module.exports = { ahjoTest: Core.test };