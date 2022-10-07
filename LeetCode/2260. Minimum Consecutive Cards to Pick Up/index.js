/**
 * @param {number[]} cards
 * @return {number}
 */

const minimumCardPickup = (cards) => {
  let left = 0;
  let rigth = 0;
  let hash = {};
  let result = -1;

  while (rigth < cards.length) {
    if (!hash[cards[rigth]]) {
      hash[cards[rigth]] = true;
      rigth++;
    } else {
      result =
        result === -1 ? rigth - left + 1 : Math.min(result, rigth - left + 1);
      hash[cards[left]] = false;
      left++;
    }
  }
  return result;
};

//

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7])); // 4
console.log(minimumCardPickup([1, 0, 5, 3])); // -1
console.log(minimumCardPickup([0, 0])); // 2
