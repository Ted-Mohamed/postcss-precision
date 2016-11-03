const fs = require('fs')
const postcss = require('postcss')
const path = require('path')

postcss([ require('./../index')])
    .process(fs.readFileSync(path.join(__dirname, './input.css')))
    .then(function (result) { fs.writeFileSync(path.join(__dirname, './output.css'), result.css) })