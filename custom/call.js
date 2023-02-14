Function.prototype.mycall = function(refObject, ...args) {
    const fn = this;

    fn.bind(refObject, args[0], args[1])();
}
