const cache = new Map();

const get = (key) => {
    const entry = cache.get(key);
    if(!entry) return null;

    if(Date.now() > entry.expiresAt) {
        cache.delete(key);
        return null;
    }

    return entry.value;
}

const set = (key, value, ttl) => {
    const expiresAt = Date.now() + ttl;
    cache.set(key, {value, expiresAt})
}

const remove = (key) => {
    cache.delete(key);
}

const clear = () => {
    cache.clear();
}

export default {
    get,
    set,
    remove,
    clear
}