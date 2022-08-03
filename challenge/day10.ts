interface NomadStorage<T> {
    [key: string]: T;
}

class LocalStorage<T> {
    private storage: NomadStorage<T> = {};
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }
    getItem(key: string): T {
        return this.storage[key];
    }
    clearItem(key: string): void {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

abstract class NomadGeolocation {
    abstract getCurrentPosition(
        successFn: void,
        errorFn?: void,
        optionsObj?: []
    ): void;
    abstract watchPosition(success: void, error?: void, options?: []): void;
    abstract clearWatch(id: string): void;
}

const stringStorage = new LocalStorage<string>();
