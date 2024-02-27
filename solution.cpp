```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int findMin(std::vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}

int main() {
    std::vector<int> nums;
    int n, temp;
    std::cout << "Enter number of elements: ";
    std::cin >> n;
    std::cout << "Enter elements: ";
    for(int i = 0; i < n; i++) {
        std::cin >> temp;
        nums.push_back(temp);
    }
    std::cout << "Minimum element in the rotated sorted array is: " << findMin(nums) << std::endl;
    return 0;
}
```