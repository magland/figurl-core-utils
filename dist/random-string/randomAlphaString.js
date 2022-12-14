var randomAlphaString = function (num_chars) {
    if (!num_chars) {
        /* istanbul ignore next */
        throw Error('randomAlphaString: num_chars needs to be a positive integer.');
    }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < num_chars; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
export default randomAlphaString;
//# sourceMappingURL=randomAlphaString.js.map