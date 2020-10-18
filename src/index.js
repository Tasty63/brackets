module.exports = function check(str, bracketsConfig) {
    brackets = bracketsConfig.map((pair) => pair.join(""));

    for (let i = 0; i < str.length + brackets.length; i++) {
        brackets.forEach(pair => {
            while (str.includes(pair)) {
                str = str.replace(pair, '');
            }
        });
    }
    return str.length === 0;
}
