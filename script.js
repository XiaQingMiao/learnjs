let array = [1, 2, 3, 4];
console.log(array);
console.log(array[0]);
array[2] = 10;
console.log(array);
array = ['hello', 1, 2, 3, true, [4, 5, 6]];
console.log(array);
console.log(array[5][1]);
array = [
    [
        [1,2,3], 
        [1,2,3], 
        [1,2,3],
    ],
    [
        [1,2,3], 
        [1,2,3], 
        [1,2,3],
    ],
    [
        [1,2,3], 
        [1,2,3], 
        [1,2,3],
    ],
];
array = [[[[[1]]]]];
console.log(array[0][0][0][0][0]);
array = [1, 2, 3, 4];
console.log(array.length);
console.log(array.join('0'));
