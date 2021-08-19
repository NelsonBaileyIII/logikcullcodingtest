// Longest Substring
function permute(nums) {
    let result = [];// result array

    if (nums.length === 0) return [];//base case
    if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        let temp = nums.slice(0);// copy array
        let temp2 = temp.splice(i, 1)// remove one element
        let sub = permute(temp2);// get permutations of rest
        for (let j = 0; j < sub.length; j++) {
            result.push(sub[j]+= (temp2));
        } // add current permutation to result
        var res = result.sort();
        }// sort result
        largestCount = 0;
     longestLetter = ""
     for (res in result) {
         letters = res.split("");// split string into array
         firstLetter = letters[0];// get first letter
         count = 1;// set count to 1
         letter = firstLetter// set letter to first letter
         while (letter === firstLetter) {
             letter = letters[count];   // get next letter
             count++;// increment count
         }
         if (count > largestCount) {
             largestCount = count;// set largest count
             longestLetter = firstLetter; // set longest letter
         }
     }
     return res; 

}
// function count (string) {  
//     var count = {}; // empty object
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     }); // iterate through string and count each letter
//     return count;
//   }

console.log(permute(["aabb", "aaaa", "bbab"]));
console.log(permute(["xxbxx", "xbx", "x"]));
console.log(permute(["dd", "bb", "cc", "dd"]));


// console.log(count("aaaaaabbbbab"));
// console.log(count("xxbxxxxbx"));
// console.log(count("ddddbbcc"));