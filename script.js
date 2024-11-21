let firstName = "Ismail "
console.log(firstName)

var lastName = "Abdulazeez"
console.log(lastName)

console.log(firstName + lastName)


let todayDate = 15;
console.log(todayDate)


//Arrays

let arrayList = ["Bread", "Beans", "Rice"];
console.log(arrayList)

//Push & Pop
arrayList.push("Pasta")
console.log(arrayList)

arrayList.pop()
console.log(arrayList)

// Shift & Unshift
arrayList.shift(arrayList[2]);
console.log(arrayList);

arrayList = ["Bread", "Beans", "Rice"];
arrayList.unshift("Yam")
console.log(arrayList)

//Selection & Length
console.log(arrayList[0]); // Output: Bread
console.log(arrayList.length); // Output: 3


//Objects

let person = {
    firstName: "Ismail", lastNames: ["Abdulazeez", "Akindele"], age: 22,
    
    hobbies: ["reading", "gaming"], //Array List

    address: { city: ["Abeokuta", "Ogun State"], zipCode:"110101"} // Object List
};

person.email = "ismail.abdulazeez@gmail.com"; // Add a new property

person.age = 20; // Update an existing property


console.log(person) //Printout

console.log(person.firstName); // Output: Ismail

console.log(person.hobbies[1]); // Output: gaming

console.log(person.address.city[1]); // Output: Ogun State


// Arrays and Objects together

let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
];

// Accessing values
console.log(students[1].name); // Output: Bob

// Adding a new student
students.push({ name: "Diana", age: 21 });
console.log(students);

console.log(students[3].age)//Output: 21




