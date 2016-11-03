const postcss = require('postcss');
 
module.exports = postcss.plugin('postcss-precision', options => {
    options = options || {}
    options.units = options.units || '%|em|px|rem'
    options.precision = options.precision || 2
    const isFloat = new RegExp(`(\\d+?\\.\\d{${options.precision},})(${options.units})`, 'gi')
    const precision = Math.pow(10,3)
    return function (css) {
       
        css.each(decl => {
            console.log(decl)
            if (decl.value && isFloat.test(decl.value)) {
                console.log(decl.value)
                const value = isFloat.exec(decl.value)[1]
                const rounded = Math.round(parseFloat(value) * precision) / precision
                decl.value = decl.value.replace(value, rounded.toString())
            }
        })
    }
})