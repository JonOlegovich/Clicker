export function getRandomDelay(min, max) {
    return  Math.random() * (max - min) + min;
}