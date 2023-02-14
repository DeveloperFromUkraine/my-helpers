/**
 * allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
 *
 * The mediator pattern makes it possible for components to interact with each other
 * through a central point: the mediator.
 * Instead of directly talking to each other,
 * the mediator receives the requests, and sends them forward!
 * In JavaScript, the mediator is often nothing more than an object literal or a function.
 */


class TrafficTower {

    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane {

    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane
};

/**
 * A good use case for the mediator pattern is a chatroom!
 * The users within the chatroom won't talk to each other directly.
 * Instead, the chatroom serves as the mediator between the users.
 */



class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`);
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
