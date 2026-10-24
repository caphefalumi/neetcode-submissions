class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length!=t.length) {
            return false
        }
        let map = new Map()
        let map2 = new Map()
        for (let i = 0; i<s.length;i++) {
            map.set(s[i],(map.get(s[i])||0)+1)
            map2.set(t[i],(map2.get(t[i])||0)+1)

        }
        for (let [key, value] of map) {
            if (!map2.has(key)) {
                return false
            }
            if (map2.get(key) != value) {
                return false
            } 
        }
        return true
    }
}
