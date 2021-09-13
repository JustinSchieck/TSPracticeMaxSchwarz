type CombinableAlias = number | string;

function combine(input1: CombinableAlias, input2: CombinableAlias){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }  else {
        result = input1.toString() + input2.toString();
    }

    return result;   
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine('Jay', 'Anna');
console.log(combinedNames);