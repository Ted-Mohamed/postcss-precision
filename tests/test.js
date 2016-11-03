const fs = require('fs')
const postcss = require('postcss')
const path = require('path')
const precision = require('./../index')

postcss([precision({units: "px|em"})])
    .process(fs.readFileSync(path.join(__dirname, './input.css')))
    .then(function (result) { console.log(result.css); fs.writeFileSync(path.join(__dirname, './output.css'), result.css) })