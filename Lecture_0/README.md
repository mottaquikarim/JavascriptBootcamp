### JS Bootcamp
# Introduction 
### Taq Karim

*Tech Lead*, **[Intersection](https://www.intersection.com/)**

---

## Objectives
* Key terms and terminology regarding the web tech ecosystem (stuff like the meaning of "servers", 'database", "APIs", etc)
* Basics of programming and how to think programmatically
* Basics of Javascript the language
* Connecting javascript to the browser
* How to proceed learning more javascript
---

## Agenda

4. Installstuff (the short version)
5. JavaScript's role in the world
6. Github
7. Important terminology / pseudocoding

---

## Install-fest (lite)

👇👇👇

-

Before we can begin our exercises in wizardry, we must download and install a few relevant programs. These programs are going to help us write code, transfer code to servers, and view the results of our code in the browser.

-

### Sublime Text
[Sublime Text](http://www.sublimetext.com/3) — code editor — you'll be writing code here. This is a free tool, but they will ask you to donate every few saves. However, you can use the program for free as long as you'd like.

-

### Chrome
[Chrome](https://www.google.com/chrome/browser/desktop/index.html) — web browser — you'll use this to view your code assignments. So free it hurts.

---

## What is JavaScript?

👇👇👇

-

Let's begin by defining what javascript actually is, how we can load javascript into our webpages, and how we can write a few lines of super basic javascript syntax.

-


### What is JavaScript
Originally called **Mocha**, then **LiveScript**, then renamed to **JavaScript**.
2. It's a subclass of ECMAScript, a standardization maintained by Ecma International
3. Basically, Ecma is the **Webster's Dictionary** of JavaScript

-

### What can you do with Javascript?
JavaScript runs in the <strong>browser</strong>, meaning it is used heavily in user-interaction.
In other words, with javascript, you can...

-

### Animate stuff
You can use javascript to create for example an infinite random prop loop.
<iframe scrolling='no' src='//codepen.io/mottaquikarim/embed/jgIbd/?height=268&theme-id=820&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-height: 268px !important;'>See the Pen <a href='http://codepen.io/mottaquikarim/pen/jgIbd/'>jQuery Random Height/Width</a> by Mottaqui Karim (<a href='http://codepen.io/mottaquikarim'>@mottaquikarim</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

-

### Allow the user to control stuff
You can allow the user to take control of a UI element and dictate its state.
<iframe height="300" src="//jsfiddle.net/2jwnjwfd/1/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

-

### Mess with people's minds
This is just a pretty cool masking example that is actually pretty hard to pull off with web dev tech (but can be done, as shown here thanks to javascript).
(**FYI**: this formed the basis of [this website](http://maveron.com/) that I built back in the day).
<iframe scrolling='no' src='//codepen.io/mottaquikarim/embed/DABIG/?height=268&theme-id=820&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-height: 268px !important;'>See the Pen <a href='http://codepen.io/mottaquikarim/pen/DABIG/'>Mask Effect demo</a> by Mottaqui Karim (<a href='http://codepen.io/mottaquikarim'>@mottaquikarim</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

-

### Determine the state of something on a page in real time
We are using something called conditionals here.
<iframe width="100%" height="500" style="height: 400px;" src="//jsfiddle.net/hrfq4qrj/1/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

-

### Load in data dynamically
Basically, we can interact with API data without ever reloading the page!

-

### A note about NodeJS

NodeJS is a standalone port of Google Chrome's v8 engine. Long story short, this allows us to run javascript on our machines in the same way you would run a "real" language such as ruby or python.

-

For this reason, we can today do essentially anything we could do with python/ruby/java/etc, namely:

1. Write web servers
2. Access the file system and manipulate data directly from a machine (simple example, we can write a javascript based "file copy" feature
3. Interact with databases 
4. Build scripts that run on intervals and perform tasks
5. etc

-

We will explore NodeJS briefly and command line javascript later on in this course

---

## Github Basics

👇👇👇

-

* What is Git?
* What is **[Github](https://github.com/)**
* Why is it useful?

-

### Please create a [Github](https://github.com/) account

**and VERIFY your email address**

---

## Essential Terminology

👇👇👇

-

#### Define: Program
Discrete, highly logical and explicit instructions that are parsed and executed by a computer.
We call this set of human-readable instructions **source code**, or colloquially, a **computer program**.

-


**Compilers** can take this source code and transform it into **machine code**, a representation of the source that can be executed by the computer's **central processing unit** or **CPU**. 

-

Not all programs are compiled though, some are **interpreted**. The difference is that compiled languages need a step where the source code is physically transformed into machine code. However, with an interpreted language, this additional step is **excluded** in favor of **parsing** and **executing** the source code directly when the program is run.

-

#### How are programs written?

All programs are composed with a collection of **fundamental** concepts that, when combined, can essentially dictate a wide variety of tasks a computer can perform.

-

**Declarations**

Typically, we can store and retrieve data in our programs by associating them with intermediary values that we call **variables**

-

**Expressions**

We use expressions to evaluate stuff. For example, **`2 + 2`** is an example of an expression that will **evaluate** a value, namely 4. 

**NOTE**: typically we can use expressions and declarations in tandem to perform complex tasks. For instance, we can reference a variable we declared in an expression to help us evaluate new values which can then be stored.

-

**Statements**

Statements will use expressions and declarations to alternate a program's **control flow**, which is essentially the order in which declarations, expressions, and other statements are executed.

-

Aside from these fundamental concepts, we also talk a lot about this idea of **algorithms**. An **algorithm** is simply a series of declarations, expressions, and statements that can be used over and over again to solve well defined problems of a certain type.

-

For example, we can implement an algorithm that converts temperature from **fahrenheit** to **celsius**. It would look something like this:
1. **Declare** F = 32;
2. **Expression** ( **F** - 32 ) / 1.8;
3. **Declare** C = **Evaluated** expression from **[2]**

-

This is a form of **pseudo** code where we define the steps a computer program &mdash; **any** &mdash; computer program can take to convert **fahrenheit** to **celsius**.

The beauty of programming is that all of it revolves around the same key set of concepts and ideas. For this reason, we do not need to specify any **particular programming language** when discussing the functional aspects of a program.

-

#### Define: Programming languages

A programming language is a series of **grammar** and **rules** that we can define towards writing source code.

-

Languages are effectively different approaches towards communicating the same ideas in programming. Essentially, we can communicate in say both **French** and **English**, what mainly differs is the structure of our sentences and the actual words and sounds themselves.
The **same analogy** can be made with programming languages.

-

#### Examples of programming languages


1. **JavaScript**: this language is interpreted.
2. **Python**: this language is interpreted.
3. **Java**: this language is compiled
4. **Ruby**: this language is interpreted.
5. **C/C++**: this language is compiled.

-

These languages all build on the same concepts defined above; the main difference lies in **how** they are run (compiled vs interpreted) and also **how** they are used. 
In general, anything programmable can be programmed in each of the languages defined above. However, some languages are better suited for certain tasks above others. 
For example, to perform web programming on the front-end, you'll want to write JavaScript. This is because all browsers collectively support running javascript within it's environment. 

-

#### Psuedo Code

Let's build a thermostat.

**Assumptions**

1. We store user designated temperature value and don't worry about how to get the input
2. There is a statement we can run to query current room temperature
3. There is a statement we can run to start / stop a "heat" source

