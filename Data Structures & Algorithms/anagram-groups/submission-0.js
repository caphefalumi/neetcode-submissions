class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = strs.map(str => str.split('').sort().join(''))
        let map = new Map()
        for (let i = 0; i<strs.length;i++) {
            if (!map.has(sorted[i])) {
                map.set(sorted[i], [strs[i]])
            }
            else {
                map.get(sorted[i]).push(strs[i])
            }
        }
        return Array.from(map.values())
    }
}
