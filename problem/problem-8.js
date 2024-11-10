function validateKeys(obj, keys) {
    return keys.every(function (key) { return key in obj; });
}
