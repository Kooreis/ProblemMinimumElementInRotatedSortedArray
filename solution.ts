Here is a TypeScript solution for finding the minimum element in a rotated sorted array:

```typescript
function findMin(nums: number[]): number {
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

let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
```

This program uses a binary search approach to find the minimum element in the rotated sorted array. It starts by setting two pointers, `left` and `right`, to the start and end of the array. Then it enters a loop, which continues until `left` is not less than `right`. In each iteration of the loop, it calculates the middle index of the current subarray and compares the middle element with the rightmost element. If the middle element is greater than the rightmost element, it means the minimum element is in the right half of the subarray. So it updates `left` to `mid + 1`. Otherwise, the minimum element is in the left half (or it could be the middle element itself), so it updates `right` to `mid`. When the loop ends, `left` and `right` will both point to the minimum element. The program then returns this element.