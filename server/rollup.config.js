// rollup.config.js
export default {
    input: 'src/AhjoServer.js',
    output: {
        file: 'lib/AhjoServer.js',
        name: 'ahjoserver',
        format: 'cjs',
    },
    external: [ 'express' ] // <-- suppresses the warning
  };