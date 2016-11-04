const postcss = require('postcss');

module.exports = postcss.plugin('postcss-precision', options => {
    options = options || {}
    options.units = options.units || '%|em|px|rem'
    options.precision = options.precision || 3
    const isFloat = new RegExp(`(\-?\\d{0,}?\\.\\d{${ options.precision},})*?`, 'gi')
    const precision = Math.pow(10, 3)
    console.log(isFloat)

    return function (css) {
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {
                console.log(decl.value, isFloat.exec(decl.value))
                if (decl.value && isFloat.test(decl.value)) {
                }
            })
        })
        // css.walkRules(function(rule) {
        //     rule.walkDecls(decl => {
        //         if (decl.value && isFloat.test(decl.value)) {
        //             console.log(decl.value)
        //             const value = isFloat.exec(decl.value)[1]
        //             const rounded = Math.round(parseFloat(value) * precision) / precision
        //             rule.insertBefore(decl, { prop: decl.prop, value: decl.value.replace(value, rounded.toString()) })
        //         }
        //     })
        // })
    }
})