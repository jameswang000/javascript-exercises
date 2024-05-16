const sumAll = function(l, r) {
    if (typeof l != "number" || typeof r != "number" ||
        l < 0 || r < 0) {
        return "ERROR";
    }

    let start = undefined;
    let end = undefined;
    if (l < r) {
        start = l;
        end = r;
    }
    else {
        start = r;
        end = l;
    }

    let res = 0;
    for(let i = start ; i <= end ; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
