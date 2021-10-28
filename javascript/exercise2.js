var allSquarePairs = function(n){
    var max = Math.sqrt(n),
    arr = [],
    temp =0,
    result = [],
        i =0;
        for(; i<=max; i++)
    {
        temp = Math.sqrt(n-i*i);
        if (temp %1 === 0) {
            arr.push(temp);
        };          
    }
    if(arr.length == 1 )
        {      
            result.push([arr[0], arr.pop()]);
        }
    while(arr.length > 0)
    {
        result.push([arr.shift(),arr.pop()]);
        //pushing the square pair in the final array
    }
    return result;
    //returning the final array
}
