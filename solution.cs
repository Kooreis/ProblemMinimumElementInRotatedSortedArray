Here is a JavaScript solution for finding the minimum element in a rotated sorted array:

```javascript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
```

This script defines a function `findMin` that takes an array of numbers as input and returns the minimum number in the array. The function uses a binary search algorithm to find the minimum number. The script then calls this function with a sample array and logs the result to the console.