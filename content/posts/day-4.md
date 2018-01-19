---
title: "Day 4: on practice"
date: 2018-01-19T17:35:01+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "Kata", "Math"]
---

The [dictionary definition](http://www.dictionary.com/browse/kata) of “**Kata**” looks something like this:

> an exercise consisting of several of the specific movements of a martial art, especially a pattern prescribed for defending oneself against several attackers, used in judo and karate training.

Those of you who are involved in tech might recognize the term as something that’s applied to Software Development as well. In that context, they’re defined as repetitive exercises, where a developer can improve different kinds of particular skills. So, the process of doing Software Katas follows 4 simple steps.

* Choose a Kata. [Here](http://codingdojo.org/kata/) are some examples.
* Write some code that aims to solving the Kata.
* Delete all the code you wrote.
* Repeat the next day (or week, it really doesn’t matter).

It can actually get more complicated than that of course, but that’s the gist of it. And, for today’s post, we have a Kata.

## The Matrix Multiplication Kata

If you’re like me, you probably don’t remember how to multiply matrixes. Luckily, the internet is always there for us, so here’s a video that explains it: [Multiplying matrices (video) |Khan Academy](https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/multiplying-a-matrix-by-a-matrix).

Now, if you were asked to write a program that multiplied 2 matrixes, how would you do it? That was what [Wolfram](https://twitter.com/wolframkriesing) and I tried to do today as a Kata. We initially thought 1 hour would be sufficient, but as the tests piled up, the hour was gone before we knew it. We ended up spending 30 more minutes, and would’ve probably stayed for a while longer if an important meeting (with 🍕) hadn’t interrupted us.

The best part of these exercises, is that they’re usually full of improvisation. A flurry of ideas gets thrown into a pot, stirred wildly, and a concoction of sorts comes out of it. And there are always weird thoughts that turn out to be brilliant. In our case, Wolfram used a Google Sheets document (which comes with an **MMult** function that does exactly what we wanted, who knew?) to test hypotheses and define the values we gave in our tests. So, Excel, a tool not widely regarded as useful during Software Development exercises, provided the necessary math brainpower that we ourselves lacked. And it worked out beautifully.

Apart from adding Excel to my Apprentice toolbelt, my main takeaway of today is that pairing up with someone who’s vastly more experienced than I am is always inspiring. And I’d like to believe they also get something valuable from pairing up with me 🤞.

[Tobias](https://twitter.com/tpflug) got a bit cryptic after he saw the Kata with the following questions:

* Testing it with _normal_ unit tests is actually not a very good approach. Any thoughts on why?
* There are some methods that would fit this problem well. Any idea what i might be thinking of?

The answer to both of those questions, is a simple, big, bold **No, I have no idea**. But I’ll find out 💪. And when I do, I’ll come back to them, and post my answers here.
