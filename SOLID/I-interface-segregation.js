/*
* The interface segregation principle states that “clients shouldn’t be forced to depend on interfaces that they don’t use.”
* This means that we shouldn’t impose the implementation of something if it’s not needed.
* */

class Penguin {}

class Bird {}

const flyer = {
    fly() {
        console.log(`Flap flap, I'm flying!`);
    },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly(); // Outputs 'Flap flap, I'm flying!'

const penguin = new Penguin();
penguin.fly(); // 'Error: penguin.fly is not a function'
