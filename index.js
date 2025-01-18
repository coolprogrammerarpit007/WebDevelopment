`use strict`;
// console.log(`Hello World!`);
let ageOfPerson = 25;
// alert(`Hi, I am ${ageOfPerson} years old!`);

// arrays in JS
const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const job = {
    title:"Software Engineer",
    company:"Amazon",
    location:"Banglore",
    experience:"3 to 5 years",
    salary:"100000 USD",

}

// console.log(job.company);

// functions in Programming
function adultYears(age)
{
    const ADULT = 18;
    if(age >= ADULT)
    return `You have ${age - ADULT} years of Adult Experience!`;
    else{
        return `You are not an Adult.`;
    }
}

// let result = adultYears(16);
// console.log(result);

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let courseName = "100 days of web development by maxmillton";
let coursePrice = 485;
let courseGoals = ['Learn Backend Development','Revise JavaScript','Learn Database, Relational and Non-Relational'];
// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

const courseInfo = 
{
    name:courseName,
    price:coursePrice,
    goals:courseGoals
}
// console.log(courseInfo);
// console.log(courseGoals[1]);

function mainGoal(arr,index)
{
    alert(arr[index]);
    return arr[index];
}

// const listItem = mainGoal(courseGoals,0);
// console.log(listItem);

let person = {
    name:'Arpit',
    greet:function(greet)
    {
        console.log(`${greet} ${this.name}`);
    }
}

person.greet('How are you?');