(2).myNumber(3) // 5

Function.prototype.myNumber = function(ref) {
    const self = this;

    return ref + self
}
