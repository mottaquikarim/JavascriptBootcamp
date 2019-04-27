### JS Bootcamp
# Functions 
### Taq Karim

*Tech Lead*, **[Intersection](https://www.intersection.com/)**

---

## Objectives
* Understand how functions are written and used in javascript

---

## Agenda
* Functions
* Parameters and Arguments
* Return Statement
* Practice

---

## Function Declarations

A **function** is a reusable statement or group of statements that can be invoked anywhere in a program. 

-

### Why  Functions, tho?

we no longer have to rewrite the same statements over and over again.

-

gives us the ability to write reusable, modular code that is easy to test and maintain

-

A critical component of programming, functions address a key tenet of engineering: 

**Don't Repeat Yourself**, 

or

**DRY**.

-

Our goal is to create programs with as few lines as possible, while maintaining clarity.

-

### Writing functions

-

**Declaration**
```
function turnOnLight() {
    // implementation here
		return true;
}
```

-

**Expression**

```
const turnOnLight = () => {
    // implementation here
		return true;
}
```

_This is the preferred method!_

-

**Guts breakdown**

* **()**: arguments list
* **{}**: function body
* **return**: what datatype the function evaluates to

-

### Invoking Functions

-

Calling, or invoking, a function executes the code defined inside the function.

```
someFunctionName(); // notice the ()
```

* the **()** after the `someFunctionName` *invokes* the function.
* this means that the code written in our function definition above will **only** run when the function is explicitly invoked. Till then, the logic stays dormant.

-

It is therefore worth noting that in some cases functions are used as a strategy for **deferring** the execution of a block of code until an **event** occurs.


-

**Declaration**
```
turnOnLight(); // this will run

function turnOnLight() {
		// implementation here
		return true;
}

turnOnLight(); // ok to also call it here
```

-

**Expression**
```
 // this will NOT run, throws err
turnOnLight();

const turnOnLight = () => {
		// implementation here
		return true;
}

turnOnLight(); // this will work though
```

---
## Parameters and Arguments

-

**Parameters**
```
const addTwoNumbers = (param1, param2) => {
		// implementation here
		// param1 and param2 are available for use here
		return param1 + param2;
}
```

* **param1** and **param2** are our function's **parameters**, essentially **inputs** established during the function's **definition**
* it is important to remember that we only **declare** parameters during the definition portion, they are **defined** during **invocation**

-

**Arguments**
```
const add = (param1, param2) => {
		return param1 + param2;
}

// 1 and 2 are the ARGUMENTS passed in to our function
const a = add(1,2); 

// 3 and 4 are the ARGUMENTS passed in to our function
const b = add(3,4); 
```
* arguments are the actual data points we pass in to our function
* in the example above, the first time **`add`** is invoked, **param1 = 1** and **param2 = 2**
* the second time **`add`** is invoked, **param1 = 3** and **param2 = 4**

-

To summarize:


The **params** are set to the **args** that are passed in to the function when it is **invoked**

-

Another example

```
const fn = (param) => {
	return param + 1
}

fn(9)
```

* 9 is the argument
* calling **`fn(9)`** will take us to the definition above and set param = 9

-


**NOTE**:

In javascript, there is no formal way to specify the **datatype** of individual params. 

In order to validate parameter datatypes, we must write logic within our functions and short circuit (exit quickly) as necessary

-

**Default Parameters**

Last note, we are able to specify some parameters to be **default**

```js
const add = (p1, p2=0) => {
	return p1 + p2;
}

add(5, 1); // 6
add(5); // 5
```

---
## Return Statement

**THIS IS REALLY IMPORTANT, FAM**

-


Functions are only useful if they *return* something.

Using the return statement ends the function's execution and "spits out" the value we're returning.

-

By default, all functions in JavaScript return undefined. Even if we don't have the return keyword in our function body, it will return undefined.

-

**STORING RETURNED VALUE IN VARIABLE**

```js
const sum = (x,y) => x + y;
// ^^^ equivalent to:
// const sum = (x, y) => {
//    return x + y;
// }

const z = sum(3, 4);
//=> 7 // returned from sum(3, 4);

console.log(z);
//=> 7 // assigned to variable z

console.log(sum(3,4))
//=> alternative to storing in z and console.logging
```

-

**RETURN STOPS EXECUTION**

The return statement will completely stop the function's execution. Any statements after the return statement will not be called.

```
const speak = > (words) {
  return;

  // The following statements will not run:
  const numOne = 1;
  const numTwo = 2;
  console.log(words);
}

//what will speak("hi") return?
```

-

**TWEET LENGTH CHECK FUNCTION**

```
const isTweetInRange = (text, longerSizeEnabled = false) => {
  const longerSize = 280;
  const defaultSize = 140;
  const maxLength = longerSizeEnabled ? longerSize : defaultSize;

  return text.length <= maxLength;
}

console.log(isTweetInRange("Hello World"));
//=> true
```

---

## Practice

* **[Functions I](https://github.com/mottaquikarim/PCNWLab-Functions_and_Scope/blob/master/pset1.js)**
* **[Functions II](https://github.com/mottaquikarim/PCNWLab-Functions_and_Scope/blob/master/pset2.js)**
* **[Default Params](https://github.com/mottaquikarim/PCNWLab-Functions_and_Scope/blob/master/pset3_default_params.js)**
