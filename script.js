// ---------------Chunks Function---------------------------
var chunks = function (arr, num) {
    var newArry = [];
    var temp = [];
    var count = 0;
    for (var i in arr) {
        temp.push(arr[i]);
        count++;
        if (count === num) {
            newArry.push(temp);
            count = 0;
            temp = [];
        }
    }
    newArry.push(temp);
    return newArry;
};
var arr1 = ['a', 'b', 'c', 'd', 'e'];
var num = 2;
// ---------------Find Function---------------------------
var findUser = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].active === true && arr[i].age > 40) { // Condition
            result.push(arr[i]);
        }
    }
    if (result.length > 0) {
        return result;
    }
    else {
        return "Not Found";
    }
};
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
// ---------------Filter Function---------------------------
var FilterData = function (arr) {
    var result = [];
    for (var i in arr) {
        if (arr[i].active === true) { // Condition
            result.push(arr[i]);
        }
    }
    return result;
};
// ---------------Sum Function---------------------------
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i in nums) {
        sum += parseInt(nums[i]);
    }
    return sum;
};
// ---------------Reduce Function---------------------------
var reduceFunction = function (arr, sum) {
    sum = sumNums(arr);
    return sum;
};
var sumNums = function (arr) {
    var sum = 0;
    for (var i in arr) {
        sum += arr[i];
    }
    return sum;
};
var AddDigits;
console.log(reduceFunction([1, 2, 4, 2], AddDigits));
// --------------------------Display Output-----------------------------------
var btn = document.getElementById("RUN");
var options = document.querySelector("select");
var DisplayDiv = document.getElementById("Display");
var SelectedFunction;
var Desc = document.createElement("h2");
var input1 = document.createElement("input");
var output = document.createElement("input");
input1.disabled = true;
output.disabled = true;
btn.addEventListener("click", function () {
    SelectedFunction = options.value;
    if (SelectedFunction === "Filter") { // Checks users input
        Desc.classList.add("mb-3", "text-secondary");
        Desc.innerText = "Filter out the user with active:true";
        DisplayDiv.appendChild(Desc);
        input1.classList.add("form-control", "text-center", "text-danger");
        input1.value = "INPUT : " + JSON.stringify(users);
        DisplayDiv.appendChild(input1);
        output.classList.add("form-control", "text-center", "text-success");
        output.value = "OUTPUT : " + JSON.stringify(FilterData(users));
        DisplayDiv.appendChild(output);
    }
    else if (SelectedFunction === "Chunks") {
        Desc.classList.add("mb-3", "text-secondary");
        Desc.innerText = "Create specfied amount of chunks of given array";
        DisplayDiv.appendChild(Desc);
        input1.classList.add("form-control", "text-center", "text-danger");
        input1.value = "INPUT : " + JSON.stringify(arr1) + "  " + num;
        DisplayDiv.appendChild(input1);
        output.classList.add("form-control", "text-center", "text-success");
        output.value = "OUTPUT : " + JSON.stringify(chunks(arr1, num));
        DisplayDiv.appendChild(output);
    }
    else if (SelectedFunction === "Sum") {
        Desc.classList.add("mb-3", "text-secondary");
        Desc.innerText = "Returns the Sum of given Numbers";
        DisplayDiv.appendChild(Desc);
        input1.classList.add("form-control", "text-center", "text-danger");
        input1.value = "INPUT : 11,14,1,2,78,6";
        DisplayDiv.appendChild(input1);
        output.classList.add("form-control", "text-center", "text-success");
        output.value = "OUTPUT : " + (sumAll(11, 14, 1, 2, 78, 6));
        DisplayDiv.appendChild(output);
    }
    else if (SelectedFunction === "Find") {
        Desc.classList.add("mb-3", "text-secondary");
        Desc.innerText = "Find the user with active:true and age is more than 40";
        DisplayDiv.appendChild(Desc);
        input1.classList.add("form-control", "text-center", "text-danger");
        input1.value = "INPUT : " + JSON.stringify(users);
        DisplayDiv.appendChild(input1);
        output.classList.add("form-control", "text-center", "text-success");
        output.value = "OUTPUT : " + JSON.stringify(findUser(users));
        DisplayDiv.appendChild(output);
    }
    else if (SelectedFunction === "Reduce") {
        Desc.classList.add("mb-3", "text-secondary");
        Desc.innerText = "Receive two parameters(function, array) and return sum of all elements.";
        DisplayDiv.appendChild(Desc);
        input1.classList.add("form-control", "text-center", "text-danger");
        input1.value = "INPUT : [1,2,4,2], sum()";
        DisplayDiv.appendChild(input1);
        output.classList.add("form-control", "text-center", "text-success");
        output.value = "OUTPUT : " + reduceFunction([1, 2, 4, 2], AddDigits);
        DisplayDiv.appendChild(output);
    }
});
