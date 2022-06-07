/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let first = 1;
    let last = n;
    let mid = 1;

    while (last - first >= 1) {
      if (last - first === 1) {
        return isBadVersion(first) ? first : last;
      }
      mid = Math.floor((last + first) / 2);

      if (isBadVersion(mid)) {
        last = mid;
      } else {
        first = mid;
      }
    }
    return mid;
  };
};
