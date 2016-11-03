const postcss = require('postcss');
 
module.exports = postcss.plugin('postcss-precision', options => {
    options = options || {}
    options.units = options.units || '%|em|px'
    options.precision = options.precision || 2
    const isFloat = new RegExp(`(\d+?\.\d{${options.precision},})(${options.units})`)
    const precision = Math.pow(10,3)
    return function (css) {
        css.walkDecls(decl => {
            if (!decl.value || isFloat.test(decl.value)) {
                const value = isFloat.exec(decl.value)[1]
                const rounded = Math.round(parseFloat(value) * precision) / precision
                decl.value = decl.value.replace(value, rounded.toString())
            }
        })
    }
})