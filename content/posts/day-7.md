---
title: "Day 7: on debt and legacy"
date: 2018-01-24T17:21:55+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "technical debt", "legacy"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

Today, the first ever **Co Co Co** took place in the Holiday Check offices. Co Co Co is a wonderful acronym that stands for **Code, Coffee and Conversations**. [Tobias](https://twitter.com/tpflug) came up with it in order to bring a private conversation we had planned to the public sphere. This was all very sudden, but that fact set the pace for what **Co Co Co** ended up being.  

The idea behind it was to have an impromptu conversation about Tech Debt and Legacy Software. Some of you may remember my rather naive approach to the topic in [Day 5](https://www.dabolivar.com/posts/day-5/) and how my ideas seemed a bit underdeveloped. Tobias thought that I was confused about the differences between **Tech Debt** and **Legacy Software** and I completely agree. I was referring to Tech Debt as a synonym for Legacy in many places. So, the focus on today's session was to try and define both concepts.

To paint some context: 

* There were 6 of us, all Software Engineers. 
* Apart from me, I believe no-one had done a lot of preparation beforehand (and that was the whole point, really). 
* There was no goal. No deliverable of any kind. It was meant to be a purely abstract affair. 

## The unconscious debt
One of the main discussion points, was wether we could incur in some Tech Debt without realizing it. I believe, acquiring Tech Debt is like making a loan. You need the money now, and don't care about paying a bit more later. But if we follow this metaphor, then there is no way we can get some Tech Debt without us knowing about it (since no-one will ever take a loan unconsciously). This makes the metaphor feel inadequate, as we can definitely get some Tech Debt without knowing, and even when we’re being very careful about it. In his article [The Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), Martin Fowler defines a kind of debt that we acquire unknowingly, but not because we made any mistakes. I like to think of this debt as the _we can't see the future debt_. Because it's exactly that. The most beautiful design and best practices can suddenly turn ugly as our systems evolve. And that's ok. We can't see the future, so all we can do is do our very best in the present, and live with the conviction that we'll keep doing our best for as long as it's necessary. 

Another question that was thrown around was, _How do we know if something is really debt?_. I believe the metaphor works great here. You know you have too much debt, when your interest payments are crippling your economy. In code terms, a team will realize it has accrued a lot of debt when it gets slower. As we accumulate debt, the interest piles up. This means that changes to the code will get harder and deliveries will come later than expected. Enough debt can cripple a software project and it's probably the cause of death of a lot of them. So, as a rule of thumb, if the team is getting slower, and changes are getting harder to make, it may well be that it’s time to pay off our debts.

## What we speak of when we speak about legacy
It's definitely not good. Legacy software has a bad connotation in the minds of every developer I've known. It's usually paired up with expressions like: 

> "I hate that project, it's been around forever so it's full of **legacy code**.

We think old is equal to legacy. And most of the times that may be true, but code's age is not what turns it into legacy. It's the fact that the knowledge to work on it is gone. It may be because the person who wrote it left and never explained the system to anybody. Or she's really busy and moved on to newer, shinier things. Or any other reason we can think of. The fact is, that software is considered legacy when no-one can confidently work on it, yet, it's still being used. This is important, because code no-one understands but also isn't used is not legacy, it's just deprecated. 

But then, how can we stop our code from turning into legacy software? Well, we came up with a couple of abstract solutions: 

* You replace it with something newer and better when it gets too painful to work on. 
* You stop the knowledge of it's inner workings from leaving. This can be achieved by pair programming often and rotating developers to different parts of the code base on a regular basis.
* You bring it back from the legacy realm into the maintained world of goodness 🌈.

If they all sound rather hard and time consuming to do, that's because they all are. There is no surefire way to stop our code from turning into legacy someday, but we can definitely try. 

All in all, **Co Co Co** was a big success. And I’m sure there will be more in the future. 

_P.S: I wrote this on Vim! It's starting to make sense. A little bit. It's not like I had an [I know Vim](https://youtu.be/6vMO3XmNXe4?t=10s) moment, it's more like I see the opportunities to use different commands, and that’s quite exciting._