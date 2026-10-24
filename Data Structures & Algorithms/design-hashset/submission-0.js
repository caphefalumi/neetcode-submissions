class MyHashSet {
    constructor() {
        // key is in the range [0, 1000000]
        // 31251 * 32 = 1000032
        this.set = new Array(31251).fill(0);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[Math.floor(key / 32)] |= this.getMask(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (this.contains(key)) {
            this.set[Math.floor(key / 32)] ^= this.getMask(key);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return (this.set[Math.floor(key / 32)] & this.getMask(key)) !== 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    getMask(key) {
        return 1 << key % 32;
    }
}