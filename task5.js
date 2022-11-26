//task 1
const testString = 'ahb acb aeb aeeb adcb axeb';
const myRegex = /a.b/g;

console.log(testString.match(myRegex));

//task 2
const phoneNumber = '2 + 3 223 2223';
const myRegexPlus = /2 [+] 3/g;

console.log(phoneNumber.match(myRegexPlus));

//task 3
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const myDate = new Date();
const parsedMonth = monthNames[myDate.getMonth()];
const parsedYear = myDate.getFullYear();

console.log(parsedMonth +' '+ parsedYear);