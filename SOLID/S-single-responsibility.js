/*
* A class should have one and
* only one reason to change,
* meaning that a class should only have one job
* */

// BAD example
class Car {
    constructor(work, model) {
        this.work = work;
        this.model = model;
    }

    startEngine() {
        // do some logic
        if(!this.work) {
            this.errorHandler(`This car ${this.model} failed to start`)
            return false;
        } else {
            return true;
        }
    }

    /*
    * This violates the single responsibility principle,
    * because the logic for logging the information
    * should not be a responsibility of the Car class.
    * */
    errorHandler(message) {
        console.log(message)
    }
}

// Good example

class ErrorHandler {
    static log(message) {
        console.log(message)
    }
}

class Car {
    constructor(work, model) {
        this.work = work;
        this.model = model;
    }

    startEngine() {
        // do some logic
        if(!this.work) {
            ErrorHandler.log(`This car ${this.model} failed to start`)
            return false;
        } else {
            return true;
        }
    }
}
