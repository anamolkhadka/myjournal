const path = require('path')

module.exports ={
    mode: 'development',   
    entry: './src/index.js',     ////Look into this source file and will watch all the imported js modules of this file
    output: {
        path: path.resolve(__dirname,'dist'),  ////Go to this absolute path.
        filename: 'bundle.js'     ////Create a bundled single js file for all the modules.
    },
    watch: true

}

