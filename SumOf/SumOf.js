
const is_number = require("is-number")
class testing {

SumOf(a, b){
    if(is_number(a) && is_number(b)) {
        return a+b
    } else {
        return "not right"
    }
}
}

module.exports = testing