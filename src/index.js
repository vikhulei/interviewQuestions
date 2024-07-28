//0-1. Capitalize first letter

//0-2. 

//1.ADD TWO NUMBERS

//2.ADD UNLIMITED NUMBER OF NUMBERS

//3.CHECK IF STRING B IS IN STRING A

//4.REPLACE FIRST AND LAST ELEMENTS OF ARRAY

//5.COMBINE ONLY NUMBERIC VALUES FROM TWO ARRAYS

//6.RETURN THE LONGEST STRING FROM AN ARRAY

//6a. Sort an array


//7. PROCESS FACTORIAL FOR EACH VALUE OF THE ARRAY AND PUT IT IN NEW ARRAY

//8. WRITE THE AGE FUNCTION:
// - if the age value has not been set, you need to create the following error: "Please, enter your age",
// - If you set a negative age value, you need to create the following error: "Please, enter positive number",
// - if a non-numeric value of age was specified, you need to create the following error: "Please, enter number",
// - if the integer value of age was not specified, you need to create the following error: "Please, enter Integer number",
// - If the user is under 18, you need to create the following error: "Access denied - you are too young!".
// If there is no error, the message “Access allowed” is displayed in the console.
// Message “Age verification complete” should be displayed at the end


//9. The function receives an array of integers, a number and a parameter (greater, less). Print a new array, where all elements will be greater/less than this number. By default, the number is 0, the parameter is greater.

//10. THE SUM OF LENGTHS OF ANY NUMBER OF STRINGS

//11. HOW MANY SECONDS in the number of seconds, minutes, hours, days, weeks, months, years

//12. RETURN MAXIMUM INTERVAL BETWEEN 2 CONSEQUTIVE NUMBERS IN A SINGLE ARRAY OF NUMBERS

//13. RETURN SMALLEST NUMBER OF ARRAY

// const smallestNumber = (arr) => arr.reduce((acc, el) => acc > el ? el : acc)

//14. Create a Movie class, the constructor of which accepts 3 parameters: movie name name, movie genre category and start year of startShow. The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic, which is drama, produced in 1997".

//15. Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
// Create a showFullName() method that returns the student's first and last name.
// Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.
// Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
// Create a getter and setter direction() to read and specify the direction field.
// Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
// Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
// Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method.

//16. Write a mapCreator(keys, values) function that takes two arrays of equal length. Using these arrays, the function must create an object of type Map, the keys of which are the values from the first array keys, and the values of Map - the values from the second array values. Moreover, the values of the map elements can be only string values. The function returns this Map object.

const mapCreator = (arr1, arr2) => {

}

let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"]

// Checking if the array lengths are same 
// and none of the array is empty
function convertToObj(a, b) {
    if (a.length != b.length || 
        a.length == 0 || 
        b.length == 0) {
        return null;
    }
    let obj = {};

    // Using the foreach method
    a.forEach((k, i) => 
              { obj[k] = b[i] })
    return obj;
}
console.log(convertToObj(a, b))

//17. Implement the getPromise(delay, message) function, which takes an integer number delay  (between 0 and 2000) and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.

//18. Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.

//19. Implement the take() function that converts a sequence of iterated values into a sequence of length n.
// Example usage:
// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
// console.log(x);
// }
// Output:
// a
// b

//20. Function takes array of objects and returns only the property of the "name" key, if it exists

//21. FIZZBUZ

//22. REVERSE A STRING/WORD

//23. CHECK IF VALUE IS OBJECT/ARRAY

//24. CHECK IF NUMBER IS INTEGER

//25. MUL FUNCTION

//26. Write a closure to console log "Hi John" and "Hello John"

//27. FIBONACCHI

//28. Write to console with IIFE

//29. Use This to apply method from one object to another

//30. Async await with throw, try, catch, finally
