Function.prototype.mybind = function(refObject, ...args) {
    const self = this;
    return function() {
        self.call(refObject, args);
    }
}
