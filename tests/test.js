const fs = require('fs')
const postcss = require('postcss')
const path = require('path')
const precision = require('./../index')

postcss([precision()])
    .process(fs.readFileSync(path.join(__dirname, './input.css')))
    .then(function (result) { fs.writeFileSync(path.join(__dirname, './output.css'), result.css) })