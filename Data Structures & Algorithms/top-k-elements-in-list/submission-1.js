class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num)||0)+1)
        }

        let heap = new MinPriorityQueue((x) => x[1]);
        for (let [num, cnt] of map) {
            heap.enqueue([num, cnt]);
            if (heap.size() > k) heap.dequeue();
        }

        let res = [];
        for (let i = 0; i < k; i++) {
            let [num, cnt] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}