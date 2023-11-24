let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

let jameAge = 18;
let johHasCriminalBlacklist = false;

isOver18 = jameAge > 18;

isAllow = isOver18 && !johHasCriminalBlacklist;

console.log(isAllow); // false
