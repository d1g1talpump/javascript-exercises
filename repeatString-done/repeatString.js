const repeatString = function (word, times) {
    let output = "";

    if (times >= 0) {
        for (let i = 0; i < times; i++) {
            output += word;
        }
    } else {
        output += "ERROR";
    }

    return output;
}

module.exports = repeatString
