// Longest Substring
function permute(nums) {
    let result = [];// result array

    if (nums.length === 0) return [];//base case
    if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        let temp = nums.slice(0);// copy array
        let temp2 = temp.splice(i, 1)// remove one element
        let sub = permute(temp);// get permutations of rest
        for (let j = 0; j < sub.length; j++) {
            result.push(sub[j]+= (temp2)); // add current element to each permutation
        } // add current permutation to result
        var res = result.sort();
        }// sort result
    return res;// return all permutations 
    //concatenate all permutations

}
function count (string) {  
    var count = {}; // empty object
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    }); // iterate through string and count each letter
    return count;
  }

console.log(permute(["aabb", "aaaa", "bbab"]));
console.log(count("aaaaaabbbbab"));