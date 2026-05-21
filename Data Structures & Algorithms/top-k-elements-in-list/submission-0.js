class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // object loop through each item in the array keeping track of the scoreboard
        const scoreBoard = {}
        for (let num of nums) {
            scoreBoard[num] = (scoreBoard[num] || 0) + 1
        }
        // make an array with the object loop through the array 
        // for each num and frequent push frequent and numb into the array

        const array = Object.entries(scoreBoard).map(([num, score]) => [score, parseInt(num)])

        // then sort the array in decending order
        array.sort((a,b) => b[0] - a[0])
        // console.log(array)

        // take the first k elements from the array
        // return only the num from the k elements
        const answer = array.slice(0, k).map((player) => player[1])

        return answer

    }
}
