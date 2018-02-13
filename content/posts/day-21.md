---
title: "Day 21: on Haskelling"
date: 2018-02-13T15:48:03+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "Haskell"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

You know how people say “_there are many ways to learn something_”? Most of the time, what they’re really saying is, _”I don’t care how you learned, I’ll do it my way”_. And it's true, there are multiple ways to learn stuff, but Let’s face it, we’re no [Sinatras.](https://www.youtube.com/watch?v=ljrFQyE1hAg) and we could use some guidelines when trying to learn something. So, here’s my very amateurish advice to learning Haskell. 

## So, you want to Haskell
My first contact with the language was about 6 months ago. I had been on an information consuming rampage about everything Functional Programming for a couple months, and at one point you reach one very important sentence: **If you really want to understand FP, learn a purely functional language**. So I got my google on and started looking for resources to learn Haskell, the only purely functional language I knew existed. Being the diligent researcher that I am, I took the first hit as the sole source of truth in the entire internet and figured I would read [Learn you a Haskell for Great Good](http://learnyouahaskell.com/). And failed miserably. 

Fast forward a couple months and I’m starting the apprenticeship and reading the introduction to [Haskell Programming from First Principles](http://haskellbook.com/). I’m currently in the middle of chapter 9 (Lists) and there has been no misery whatsoever, I’m actually motivated to read more and do more exercises with every chapter I leave behind. Now, what changed? Did I get smarter? Or did I choose the wrong book at the beginning? I have my own theory, but let’s state some facts first: 

* **Learn you a Haskell** starts talking about lists in the second chapter, I’d say about 20 or so pages in. **The Haskell Book** deals with lists on chapter 9. It starts on page 298. Let that sink in for a second. Exactly. 
* Both books say they’re a good resource for beginners, but I was a beginner and felt entirely befuddled by List Comprehensions on **Learn you a Haskell**. I had never seen Lists before (JS Arrays don’t count) and just the syntax alone seemed impossible to grasp. My first contact with List Comprehensions in **The Haskell Book** came after writing dozens of exercises and hundreds of syntax errors and angry yelling from GHCI. 
* I dropped **Learn you a Haskell** in frustration after 2 days. I’ve been reading **The Haskell Book** for 4 and a half weeks and going strong. 

You may think I’m biased but I'm really, honestly not. I was equally motivated 6 months ago as I was a couple weeks back. I don’t think I got any smarter in the meantime either. What I do believe, is that both books have a vastly different idea of what a beginner is. While **Learn you a Haskell** assumes a beginner is someone who doesn’t care about the inner workings and just wants to get to working code as fast as possible, **The Haskell Book** believes a beginner needs a lot of information to grasp the principles of both the language and the underlying mathematic constructs it’s built upon. It does a great job of achieving this without overwhelming the reader with all of the specifics. So, are those extra 278 pages before Lists really necessary? In my case, they absolutely were. And if you can see yourself in my current knowledge and background, I can assure you they will be necessary for you as well. 

At this point, it may seem like I’m bashing on **Learn you a Haskell**. That's not my intention at all, I think it’s great that more people take on the daunting task of teaching Haskell. But I believe the beginners it’s aimed at, are not really beginners. They may have no knowledge of Haskell, but the book assumes a big amount of Computer Science knowledge or experience that really clashes with the kind of beginner I was. I believe if I went through the book again today after all the exposure I’ve gotten to other topics, I would probably enjoy it a lot. It’s just that for me, jumping into the deep end like the book wants you to didn’t work. I was overwhelmed, confused and unable to grasp even simple topics after reading 20 or so pages. 

Even though I’ve only barely scratched the surface of what **The Haskell Book** has to offer, I would already highly recommend it to anyone looking to learn the language. But, if you’re very experience in Lambda Calculus and have a firm grasp on Functional Programming principles, then going through **Learn you a Haskell** will probably have you understanding and writing Haskell much faster than the other book. Then again, if someone falls into the second category, then it’s probably impossible to consider them beginners, isn’t it?

***Disclaimer:*** _I was kinda good at math in high school, but I have in no way shape or form a formal background in mathematics. Category Theory has mostly been an alien subject in my life. So when I talk about “my background” I mean “someone who didn’t formally study math, CS or any kind of science really._