class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map()
        let max = 0
        let num = nums[0]
        for (let i =0 ; i<nums.length;i++) {
            map.set(nums[i],(map.get(nums[i])||0)+1)
            if (map.get(nums[i])>max) {
                max = map.get(nums[i])
                num = nums[i]
                
            }
        }
        return num
    }
}
