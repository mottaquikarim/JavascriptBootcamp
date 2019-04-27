### JS Bootcamp
# Data Types 
### Taq Karim

*Tech Lead*, **[Intersection](https://www.intersection.com/)**

---

## Objectives

* Review JavaScript Datatypes
* Declare, assign to, and manipulate data stored in variables

---

## Agenda
1. What are datatypes?
2. Supported Javascript Datatypes
3. Declaring Variables in Javascript
4. Datatypes and supported operators
5. Arrays and array ops

---

## Datatypes

In programming languages, a data type is a classification identifying one of various types of data. 

-


From a data type, we can determine:

* the possible values for that type
* the operations that can be performed on that type
* the meaning of the data
* the way values of that type can be stored

-

Most programming languages have the following data types. 

👇👇👇

-

### Strings

* single words or sentences surrounded by double or single quote, e.g. `'Hello World'`

-

### Numbers

* typically languages will make a distinction between **integers** and **floats**
* (in some languages, distinctions go even deeper, ie: **long**, **double**, **short**, etc

-


### NB
* in javascript, all numbers are represented as 64 bit floating point integers
* however maximum "safe" number in javascript is (2^53)-1, or 9007199254740991
* **[more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)**

-

### Booleans

* either true or false, i.e. `true`, `false`

-

### Arrays / Lists

* collections of data, e.g. `['Shirts', 'Pants', 'Dresses']`

-

### Dictionary / Hash-map

* collection of data in the form of key-value pairs. Also referred to as a `map` or `dictionary`.

-

### Objects / Classes

* a representation of something in the real world using the datatypes described above

---

## Supported JavaScript Datatypes

👇👇👇

-


In JavaScript, we have five **primitive** types:

* **string**
* **number**
* **boolean**
* **undefined**
* **null**
* **symbol**

-

### Strings

```js
"hello!" // double quotes
'hi' // single quotes
`testing` // template literal - very useful, as we will see
```

-

### Numbers

```js
5
3.14159
4. // yes, this is valid. 
   // no, do not ever do this in actual code
```

-

### Boolean

```js
true // lower case, always
false
```

-

### undefined

```js
undefined
```

By itself, this datatype is quite meaningless. However when we get to variables we will see that it is essentially used to check if a variable has been **declared**

-

### null

```js
null
```

Same as above, the main difference being that **null** is used convey that a variable has been **declared** but it is still **empty**

-

### Symbol

```js
Symbol('description')
```

-


The symbol is a new primitive datatype introduced recently. Symbols are the only primitive type that does not have a **literal** syntax (ie: when we write `'foo'` we are actually saying: `String('foo')`).

-


Everytime you create a symbol you are making a **unique** entity that can never ever be reproduce at runtime. This is useful for metaprogramming applications and also for adding stuff like constants that you don't want anyone to accidentally override.

-


Everything else, is an **object**, including:

* **arrays** *e.g.* `[]`, `['apple', 'orange']`
* **functions**, *e.g.*, `function foo() {}`
* **objects**, *e.g.* `{}`, `{ name: 'John Smith' }`

-

***functions*** in particular are both powerful and wonderful. we will discuss them in depth later but for now just know that they are essentially black boxes that take inputs does some calculation/logic/something useful, and returns to you an output

-

### Determining the Type
We can determine the type of a variable or value using `typeof()` (which returns a string).

```js
typeof 10
=> 'number' // note the quotations, typeof yields a string
```
```js
typeof {}
=>  'object'
```
```js
typeof 'Hello World' 
=> 'string'
```
**Due to how JavaScript was first implemented, `typeof(null)` returns `'object'`**

-

Before exploring each individual data type and the operations we can apply to them, let's see how we can declare variables

---
## Variables

👇👇👇

-

Variables are used to store data into a computer's memory so we can reference them later. We will always use the `const`/`let` keywords to declare a variable.

-

**const** vs **let**

```js
const a = 1;
let b = 1;
```

* **const**: used to convey a _constant_ variable, meaning we don't expect to **ever** change the datatype of **a**
* **let**: used to convey a ... _variable_ variable, meaning we **do** - and we are allowed to - mutate the datatype (or value, or both) of **b**



-


If we declare a variable without assigning it a value, its value is `undefined`:
```js
let a;
a
=> undefined
```

**Question**: what would happen if we tried the above with **const**?

-

### Naming
By convention, all names should be `camelCased`, whether they're for variables or functions.


```js
const myScore = 100;
```
```js
const myString = "Hello World!";
```

-

Good variables are descriptive.
Bad variables are ambiguous.

**NOTE**: `$` and `_` are also valid variables.

There are certain reserved words we can't/shouldn't use for names, *e.g.* `var`, `function`, `class`, etc.

Do not use reserved keywords!

-

### Assignment Operators
Values are assigned to a variable using `=`:
```js
const num = 1;
num;
=> 1
```

-


JavaScript also has compound assignment operators, `+=`, `-=`, `/=`, and `*=`:
```js
num;
=> 1

num += 5;
=> 6
```

**NOTE**: these usually only apply to the **number** datatype, however the **+=** will also work for strings

-

We can use `++` and \-\- to increment and decrement by `1` respectively as postfix or prefix operators:
```js
const num = 5;
num;
=> 5

num++;
=> 5
num;
=> 6

++num;
=>7
```

-

### Number to String
Use the `toString()` method on a number by itself, or on a variable that's storing the number:
```js
const num = 1;
num.toString();
=> "1"

(1).toString();
=> "1"

// what does this return?
1.toString();
```

-

### String to Number
Use the `Number()` method, and pass in the string. It will return `NaN`, or not-a-number for anything that's not parseable:
```js
Number("5");
=> 5

Number(":)");
=> NaN
```

**QUESTION** what is **NaN**? How can we prove to ourselves definitively his datatype?

-

Now, we will explore some of the javascript specific datatypes in further detail

---

### Numbers
👇👇👇

-

In JavaScript, we only have floating point numbers, which results in cases like these:
```js
0.1 + 0.2
=> 0.30000000000000004
```

```js
3.0 === 3
=> true
```

-

### Arithmetic Operators
We use operators to work with data in JavaScript. The standard arithmetic operators are available:
```js
1 + 2
=> 3
```
```js
2 - 5
=> -3
```
```js
5 / 2
=> 2.5
```
```js
6 * 2
=> 12
```

-

### Additional Math Operators
For additional math operators, *e.g.* power, we can use the `Math` object
```js
// 3^2 becomes
3 ** 2
=> 9
```
```js
// square root of 4 becomes
4 ** 0.5
=> 2
```
```js
// random number between 0 and 1 exclusive
Math.random()
=> 0.3156855241316119
// hopefully, you got a different random number!
```
```js
// rounding a number to an integer
Math.round(3.99)
=> 4
```

---
### Strings
Strings are a collection of characters. We'll use this type for words and text, *e.g.* `'John Doe'`. We can combine, or concatenate strings together, using the `+` operator:
```js
// notice the space in "Hello "
"Hello " + "World!"
=> "Hello World!"
```

-

If we try adding a number and a string, the number gets converted to a string:
```js
"3" + 3
=> "33"

"5" + 6
=> "56"
```

-

### Template Literals
Template literals are string literals that allow you to embed and splice expressions in a more flexible way.

-

We use backticks to indicate the start of a template literal:
```js
// multi-line strings
`Hello, this is Line 1!
...and here is Line 2!
`
```

-

Placeholders and more complex expressions can also be used:
```js
const firstName = 'Foo';
const lastName = 'Bar';
`Hello, ${firstName}`
=> "Hello, Foo"

`Bye, ${firstName + lastName}`
=>"Bye, FooBar"
```

-

Note that you need to end the string with whatever type of quote you started out with:
```js
"Greetings y'all!"
=> 'Greetings y\'all!'
```

Depending on the environment, the quote may appear as escaped or unescaped.

-

You can escape a quote manually using a `\`
```js
'John\'s a JavaScript developer!'
=> 'John\'s a JavaScript developer!'
```

**NOTE**: this is not necessary if using string literals

---
### Arrays

An array provides a convenient way to store a collection of __things__. Say we want to keep the numbers `2`, `3`, `5`, `7`, and `11` - all in one place.

-

Instead of creating five separate variables we can create an array to store all these values.
To create an array, we use the `[` and `]` brackets, and in between put whatever values we need separated by commas.

-

We call also call new on the Array class and pass in the elements desired.

```js
let arr = [2, 3, 5, 7, 11]

// OR

let arr = new Array(2, 3, 5, 7, 11)
```

-


Arrays can be accessed like strings. They also have indexes and a `length` property.

![array](./assets/array_elements.jpg)

-


We can put any type of variables as elements of an array. We can even mix different types in a single array or put an array itself as one
of the elements.

```js
let animals = ['cat', 'dog', 'raccoon']
let mixedArray = [2, 5, 'zebra', ["Can", "you", "believe", "it"]]
```

-

However it is **BEST** practice to use the same data type across all elements in the array.

We access the first element of the array by using index `0`, and the last by using index `array.length - 1`

-

```js
let animals = ['cat', 'dog', 'raccoon', 'giraffe']

// this will print 'cat'
console.log(animals[0])

// this will print 'giraffe'
console.log(animals[animals.length -1])
```

-

## Adding, Removing and Modifying Elements

Unlike with strings, we can modify array elements:

```js
let animals = ['cat', 'dog', 'raccoon', 'giraffe']
// changing the second element to 'zebra'
animals[1] = 'zebra'
console.log(animals)
// => [ 'cat', 'zebra', 'raccoon', 'giraffe' ]
```

-

### Push

We can add elements to the end of an array by using the `push` method

```js
let numbers = [2, 4, 6]
// adding the number 8
numbers.push(8)
// now numbers will be: [2, 4, 6, 8]
// you can also add multiple elements by adding more elements to push.
numbers.push(10, 12, 14)
// now numbers will be: [2, 4, 6, 8, 10, 12, 14]
```

-

### Pop
We can remove an element from the end of an array by using the `pop` method:

```js
let numbers = [2, 4, 6]
// removing the last element in the  array
numbers.pop()
// now array will be: [2, 4]
```


-

### Unshift

To add an element to the beginning of the array use the method: `unshift`.
```js
let numbers = [3, 5]
numbers.unshift(1)
// numbers is now: [1, 3, 5]
```


-

### Shift

To remove an element from the beginning of the array use the method: `shift`.
```js
let numbers = [3, 5]
numbers.shift()
// numbers is now: [5]
```

-

**Helpful trick**
Sometimes it can be hard to remember which methods do what. Here's a helpful trick. Push and pop are fairly easy. Pushing into the array, and popping off. Now with shift and unshift try and remember that unshift is like push but at the beginning. You can __tell__ they are similar because they both have the letter 'u' in them. The ones with the 'u' add to the array, the other two are removing.

---

## Practice

* **[Basic Vars Review](https://github.com/mottaquikarim/PCNWLab-Variables)**
* **[Arrays](https://github.com/mottaquikarim/PCNWLab-Arrays)**

-

### Mad Libs

Let's create a simple mad libs program.

1. Create three variables, `noun`, `verb`, `adjective`. 
2. By default all three should be set equal to **"---------"** (essentially a blank line)
3. When the values of those variables are swapped with an actual noun, verb, adjective, display the following string:

```js
"The [NOUN] [VERB] [ADJECTIVE]"
```
