/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let first = m - 1;
  let second = n - 1;
  let idx = m + n - 1;

  while (second >= 0) {
    let val1 = nums1[first];
    let val2 = nums2[second];

    if (val1 > val2) {
      nums1[idx] = val1;
      idx--;
      first--;
    } else {
      nums1[idx] = val2;
      idx--;
      second--;
    }
  }
};

// [1,2,3]
//  ^
// [2,5,6] 3 3
//  ^
