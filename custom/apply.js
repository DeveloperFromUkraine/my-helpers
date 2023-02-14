Function.prototype.myapply = function(refObject, args) {
    const fn = this;

    fn.call(refObject, ...args)();
}
