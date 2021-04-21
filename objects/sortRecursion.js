function _merge(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[0] < right[0]){
          results.push(left.shift())
        } else {
          results.push(right.shift())
        }
    }
    console.log('_merge results', results);
    console.log('_merge left', left);
    console.log('_merge right', right)
    return [...results, ...left, ...right]
}

function _mergeSort(array) {    
    if (array.length === 1){
      return array
    }
    const center = Math.floor(array.length / 2)
    const left = array.slice(0, center)
    const right = array.slice(center)
    console.log('_mergeSort center', center);
    console.log('_mergeSort left', left);
    console.log('_mergeSort right', right);

    return _merge(_mergeSort(left), _mergeSort(right))
}
// console.log(_mergeSort([100,23,0,5,78,120,45]));

console.log(_mergeSort([3, 2, 1]));
let nums1 = [5, 10, 2, 42];
  let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

  // console.log(_mergeSort(nums1));
  // console.log(_mergeSort(nums2));
  // console.log(_mergeSort(nums3));