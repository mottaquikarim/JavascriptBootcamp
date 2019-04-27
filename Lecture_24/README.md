### JS Bootcamp
# Object Literals 
### Taq Karim

*Tech Lead*, **[Intersection](https://www.intersection.com/)**

---

## Objectives

* Use Object literals for solving problems in javascript

---


## Agenda

1. Object Literal basics

---

## Object Literal Basics

Let's discuss the mechanics of how object literals are created and used. Then, let's use them to build something useful.

-

Object Literals are another type of **data structure**, or method for storing and retrieving data. 

* We are already intimately familiar with one type of data structure, **arrays**.
* Object literals are essentially dictionaries, or associative arrays.
* With arrays, we use the **index**, a **number**, as a way to store and retrieve information.
* With object literals, we use the **key**, a **string**, as a way to store and retrieve information.

-

**SIDE NOTE**

So actually, the computer science term for dictionaries/object literals/etc is called the **hash map**. 

**Hash maps** have a **hashing function** and an internal **array** for storing data. Given a  **key** and **value** pair that we wish to store, the hash map converts the **key** into an index for the array using the hashing function and stores the value at the calculated index.

-

### Creating Objects

```js
// empty object literal
const myObj = {};

// object with prefilled values
const myObj2 = {
    "property1": "value1",  // notice the colon!
    "property2": 2, // notice the comma!
}

// updating an object after the fact
myObj2["property3"] = true;
```

Note that updating an object literal is not the same a **redefining** it. This is why we are able to mutate our **const** object without errors.

-

Objects are just another type of valid javascript datatype. Question:

```js
//  what do you expect to see?
console.log(typeof myObj2); 

 // what do you expect to see?
console.log(typeof myObj2["property1"]);

// how about now?
console.log(typeof myObj2["thisPropertyDoesntExistTho"]);
```

-

A note about syntax:

```js
myObj2.foobar = 'baz';

const myObj3 = {
    test: 1,
}

console.log(myObj3.test)
```

Sometimes you will see object properties being referenced and defined in the manner above. 

👇👇👇

-

Generally, this is usually **ok** however if you want to store an object property that has invalid javascript characters such as spaces or dashes you **must** use the approached defined initially.

-

### Dynamically setting / retrieving values

Consider the following:

```js
const o = {
	"test": 1,
}

const key = "test";
console.log(o[key]); //  what should this give us?
```

```js
const key = "foo";
const o = {
	[key]: 'val',
}
console.log(o); // what key is stored in o?
```

Keep this technique in mind, it will come in handy when we write more complex code.

-

### Methods

Object properties that are type `function` are called **`methods`**. (Just a fancy word for a function that is the property of an object). 

👇👇👇

-

Here's how we can get/set methods

```js
const human = {
    'name': 'Taq Karim',
    speak(catchphrase) {
		    return "Hi, my name is " + 
				human.name + 
				'. ' + 
				catchphrase;
		}
}

console.log(human.speak('BOOM. We chillin')); 
```

-

Generically, we can define methods as follows:

```
const obj = {
	method() {
		// this is preferred
	},
	// or
	method2: function() {
	
	},
	// or
	method3: () => {
	
	}
}
```

-

### Example of object usecase

```js
const htmlNode = {
	tagName: 'div',
	attributes: {
		'data-test': '1',
		'id': 'LOL-dont-try-this-at-home',
		'class': 'foo bar',
	},
	getAttribute(name) {
		return htmlNode.attributes[name];
	},
	setAttribute(name, value) {
		htmlNode.attributes[name] = value;
	},
	classList: {
		add(name) {
			const currClass = htmlNode.getAttribute('class').split(' ');
			currClass.push(name);
			htmlNode.setAttribute('class', currClass.join(' '))
		}
	},
}
```

* this is a **representation** in javascript of an **HTML DOM element**

-

Primarily, this is the major usecase for objects. Think of it as a way to represent a **real world** thing in terms of code. Object literals are the simplest way to achieve that.

In a future lecture we will consider **classes** and how we can standardize this concept and make it more reusable.

-

Minimally, however, we can think of object literals as a way to **namespace** a bunch of similar datatypes. For instance, if we wanted to store some properties of a cat...

-

```
const layla = {
	fullName: 'Layla Karim',
	age: 7,
	isFluffy: true,
	speak() {
		return 'meow'
	}
}
```

In this case we have associated what would have been a few generic variable names under the **layla** namespace. This way, we are no longer in danger of scope collision.

-

### Example of object usecase

Consider the following function.

* What does it do?

```js
const validatePlayerChoice = player => {
	const lp = player.toLowerCase();
	const c = lp.substring(0,1);
	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}
	return c;
}
```

-

With comments now...

```js
const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();

	// remove bias for misspelled choices
	const c = lp.substring(0,1);

	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}

	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

-

Suppose we created an object as follows:

```js
const validPlayerChoices = {
	'r': true,
	'p': true,
	's': true,
}
```

How could we use this object to make our player validation logic easier?

👇👇👇

-

```js
const validPlayerChoices = {'r': true, 'p': true, 's': true,}

const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();
	// remove bias for misspelled choices
	const c = lp.substring(0,1);
	if (typeof validPlayerChoices[c] === "undefined") {
		throw new Error("INVALID INPUT: player " + c)
	}
	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

What are some benefits to this approach?

-

### PSET

* **[Object Literals](https://github.com/mottaquikarim/PCNWLab-Object-Literals)**
