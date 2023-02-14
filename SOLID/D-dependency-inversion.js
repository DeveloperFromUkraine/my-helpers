/*
* This principle states that high-level modules
* shouldn’t depend on low-level modules and
* they both should depend on abstractions,
* and abstractions shouldn't depend upon details.
* Details should depend upon abstractions.
* */

class ClassA {}
class ClassB {}
class ClassC {}
class Facade {
    constructor() {
        this.a = new ClassA();
        this.b = new ClassB();
        this.c = new ClassC();
    }
}
class Foo {
    constructor() {
        this.facade = new Facade();
    }
}

// BAD

class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}


/*
* The dependency injection principle states that
* high level code should never depend on low level interfaces,
* and should instead use abstractions. It’s all about decoupling code.
* снижение связности (decoupling)
* */

//GOOD

class PurchaseHandler {
    processPayment(paymentDetails, amount) {
        const paymentSuccess = PaymentHandler.requestPayment(
            paymentDetails,
            amount
        );

        if (paymentSuccess) {
            // Do something
            return true;
        }

        // Do something
        return false;
    }
}

class PaymentHandler {
    requestPayment(paymentDetails, amount) {
        // Complicated, PayPal specific logic goes here
        return PayPal.requestPayment(paymentDetails, amount);
    }
}
