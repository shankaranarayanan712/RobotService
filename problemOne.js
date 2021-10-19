
const flatten = (arr) => {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }


const getLength = (arr) => {

    const a = flatten(arr)
 
    const sumUp = a.reduce((sum, el) => sum + el, 0);
    //const sum = sumUp()
    return {
        count: a.length,
        sum: sumUp
    }
  };
  
 //Example Test cases
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));
console.log(getLength([]));
  
  