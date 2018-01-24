---
title: "Day 5: on technical debt"
date: 2018-01-22T16:59:01+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "technical debt"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

The start of a new week was also the busiest day of the apprenticeship so far. It began with the **Matrix Multiplication Kata** where [Wolfram](https://twitter.com/wolframkriesing) and I continued our journey into uncharted math waters. There were multiple head scratches and _Aha!_ moments and I’m sure this will continue the rest of the week. There was some Haskell, lots of Bash (crossing of items from the [dreaded list of ignorance](https://www.dabolivar.com/posts/day-3/#reflecting-on-knowledge-and-ignorance), one at a time) and a very interesting couple hours of research into **Technical Debt** and what we understand by it.

## Interest Rates

Martin Fowler said it better, back in 2003 in [this article](https://martinfowler.com/bliki/TechnicalDebt.html). Everything in that post holds true today, 14 years later. We haven’t gotten any better at measuring performance, or at assessing the risks of incurring in technical debt. But I’m an optimist 🦄. And I firmly believe we can do better.

I remember I was once asked this question in an interview:

> “¿Is it ok to have technical debt?”

I don’t know what I said then, but today, I think it’s unavoidable. Every line of code we write will eventually create tech debt. Good coding practices will keep us alive longer, but they won’t stop it forever. Basically, I believe that, given enough time, even the best code we can possibly write, will start giving us problems if left unchecked. There are a lot of reasons for this, like:

* Software development moves very rapidly and is in constant evolution. What was great yesterday will not be great tomorrow.
* Other projects and dependencies change and lose compatibility with older code.
* Systems grow in ways we can’t predict. It’s impossible to assert that our code will behave perfectly forever and ever.

In his book, **[The Software Craftsman](https://www.goodreads.com/book/show/18054154-software-craftsmanship)**, [Sandro Mancuso](https://twitter.com/sandromancuso) compares taking care of our code to taking care of a garden. Even if we put the highest attention to detail at first, weeds will try to take over, and it’s our job to stop them. But it’s never a one time job, it’s a constant. And in a perfect world, we would have enough time to take care of every line of code in a system. Unfortunately, there are only 24 hours in a day, and sometimes we need to make tough decisions. And tough decisions, are easier decisions if we use some data.

## Rates

Any professional in finance would take interest rates into account when assessing the risk of a loan. And different types of loans, have different rates. I believe that’s also true about the code we write every day. There are parts of our system that are integral to its inner workings. These parts should have a **really high interest rate**. And there are some parts that are rarely touched, and should have a **low interest rate**. Now, the most important part of this idea, is we must assume that everything holds an initial debt. It may be small if we did our job right, or it may be huge if we cut lots of corners, but it’s always more than 0. So, we have our extremes and a myriad in-betweens:

* **High interest rates** ➡ will quickly become high debts if left untouched, even when the initial value was small (great code, with great design and lots of good tests).
* **Low interest rates** ➡ will not grow as fast. Nevertheless, it could easily become a major problem if not taken care of at some point.

So, every new and old feature could be assigned different rates, and this rates can be re-evaluated every time we take care of the weeds growing in our garden. Needless to say, there’s no part of a system that can be completely neglected. Even small debts with low rates will cripple a system under the right (or wrong) circumstances.

This is, of course, a very crude idea with no validation whatsoever and it may very possibly lead nowhere. But ideas grow better in the wild, so it seems better to just put it out there and see what happens.
