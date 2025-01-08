"use strict"

class Observer{

    constructor () {
        this.subscribers = [];

    }
    broadcast () {
        this.subscribers.forEach(cb => cb());
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback) {
        this.subscribers = this.subscribers
        .filter(cb => cb !== callback)
    }
}