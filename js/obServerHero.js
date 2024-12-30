class ObserverHero {
    constructor() {
        this.subscribers = [ ]
    }
    broadcast(data) {
        this.subscribers.forEach(cb => cb(data));
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(cb => cb !== callback)
    }
}
export const heroOb = new ObserverHero()