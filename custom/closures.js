var x = 10;

function foo() {
    var y = 20; // free variable
    function bar() {
        var z = 15; // free variable
        return x + y + z;
    }
    return bar;
}

foo()() // 45


function secretPassword() {
    var password = 'xh38sk';
    return {
        guessPassword: function(guess) {
            if (guess === password) {
                return true;
            } else {
                return false;
            }
        }
    }
}

var passwordGame = secretPassword();
passwordGame.guessPassword('heyisthisit?'); // false
passwordGame.guessPassword('xh38sk'); // true
