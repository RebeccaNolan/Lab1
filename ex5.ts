function numCharacters(value: string):number
{
    return value.length;
}

function count_no_spaces(value: string):number
{
    return value.replace(" ", "").length;
}

//question mark makes it an optional parameter
function count_both(value:string,spaces?:boolean) : number
{
    let count:number = 0;
    if(spaces)
    {
        count = value.length;
    }
    else
    {
        count = value.replace(" ", "").length;
    }
    return count;
}

let count:number = numCharacters("string 1");
console.log(count);

console.log(count_no_spaces("test 1"));

console.log(count_both("Test 1", true));
console.log(count_both("Test 1"));