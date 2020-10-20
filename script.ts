// ---------------Chunks Function---------------------------

let chunks = (arr, num:number) => {
    let newArry = [];
    let temp = [];
    let count = 0;
    for(let i in arr){
        temp.push(arr[i]);
        count++;
        if(count === num){
            newArry.push(temp)
            count = 0;
            temp = []
        }
    }

    newArry.push(temp)
    return newArry
}

let arr1 = ['a', 'b', 'c', 'd','e']
let num = 2;

// ---------------Find Function---------------------------

let findUser = (arr) =>{
    let result = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].active === true && arr[i].age > 40 ){     // Condition
            result.push(arr[i])
        }
    }
    if(result.length > 0){
        return result
    }else{
        return "Not Found"
    }
}

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];


// ---------------Filter Function---------------------------

let FilterData = (arr) =>{
    let result = []
    for(let i in arr){
        if(arr[i].active === true){     // Condition
            result.push(arr[i])
        }
    }
 
        return result
}





// ---------------Sum Function---------------------------

let sumAll = (...nums) => {
    let sum = 0;
    for(let i in nums){
        sum += parseInt(nums[i])
    }
    return sum
}


// ---------------Reduce Function---------------------------

let reduceFunction = (arr, sum:Number) => {
    sum = sumNums(arr)
    return sum
}

let sumNums = (arr) => {
    let sum = 0;
    for(let i in arr){
        sum += arr[i]
    }

    return sum
}

let AddDigits
console.log(reduceFunction([1,2,4,2], AddDigits))

// --------------------------Display Output-----------------------------------

let btn = document.getElementById("RUN");
let options = document.querySelector("select")!;
let DisplayDiv = document.getElementById("Display")
let SelectedFunction;

let Desc = document.createElement("h2");
let input1 = document.createElement("input");
let output = document.createElement("input");

input1.disabled = true;
output.disabled = true;

btn.addEventListener("click", function(){
    SelectedFunction =  options.value;

    if(SelectedFunction === "Filter"){                        // Checks user input
    
    Desc.classList.add("mb-3", "text-secondary");
    Desc.innerText = "Filter out the user with active:true"
    DisplayDiv.appendChild(Desc)

    input1.classList.add("form-control","text-center","text-danger")
    input1.value ="INPUT : "+ JSON.stringify(users)
    DisplayDiv.appendChild(input1)

    output.classList.add("form-control","text-center","text-success")
    output.value ="OUTPUT : "+JSON.stringify(FilterData(users))
    DisplayDiv.appendChild(output)

}else if(SelectedFunction === "Chunks"){              

    Desc.classList.add("mb-3", "text-secondary");
    Desc.innerText = "Create specfied amount of chunks of given array"
    DisplayDiv.appendChild(Desc)

    input1.classList.add("form-control","text-center","text-danger")
    input1.value ="INPUT : "+ JSON.stringify(arr1) +"  "+num;
    DisplayDiv.appendChild(input1)

    output.classList.add("form-control","text-center","text-success")
    output.value ="OUTPUT : "+JSON.stringify(chunks(arr1,num))
    DisplayDiv.appendChild(output)
}else if(SelectedFunction === "Sum"){

    Desc.classList.add("mb-3", "text-secondary");
    Desc.innerText = "Returns the Sum of given Numbers"
    DisplayDiv.appendChild(Desc)

    input1.classList.add("form-control","text-center","text-danger")
    input1.value ="INPUT : 11,14,1,2,78,6"
    DisplayDiv.appendChild(input1)

    output.classList.add("form-control","text-center","text-success")
    output.value ="OUTPUT : "+(sumAll(11,14,1,2,78,6))
    DisplayDiv.appendChild(output)
}else if(SelectedFunction === "Find"){
    
    Desc.classList.add("mb-3", "text-secondary");
    Desc.innerText = "Find the user with active:true and age is more than 40" 
    DisplayDiv.appendChild(Desc)

    input1.classList.add("form-control","text-center","text-danger")
    input1.value ="INPUT : "+ JSON.stringify(users)
    DisplayDiv.appendChild(input1)

    output.classList.add("form-control","text-center","text-success")
    output.value ="OUTPUT : "+JSON.stringify(findUser(users))
    DisplayDiv.appendChild(output)

}else if(SelectedFunction === "Reduce"){
    
    Desc.classList.add("mb-3", "text-secondary");
    Desc.innerText = "Receive two parameters(function, array) and return sum of all elements." 
    DisplayDiv.appendChild(Desc)

    input1.classList.add("form-control","text-center","text-danger")
    input1.value ="INPUT : [1,2,4,2], sum()"
    DisplayDiv.appendChild(input1)

    output.classList.add("form-control","text-center","text-success")
    output.value ="OUTPUT : "+reduceFunction([1,2,4,2], AddDigits)
    DisplayDiv.appendChild(output)

}
})











