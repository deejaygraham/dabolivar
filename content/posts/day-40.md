---
title: "Day 40: on bad tests"
date: 2018-03-12T16:44:05+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "testing"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

Today, I wrote really bad tests. I mean, seriously, horrendous tests. I was pairing with [Uğurcan](https://twitter.com/UgurcanSengit/) and every line we wrote made it worse. And the worst part of it all, was that I knew our tests sucked, but I couldn’t quite put my finger on the reason. I mean, we had followed a **Test Driven approach**, but our design was horrible. I sat down with [Tobias](https://twitter.com/tpflug) and he asked me: 

> What value are your tests giving you?

And then it hit me: our tests were actually subtracting value from our project. They were clumsy, added dependencies and as time went on, they would become harder and harder to maintain. And once I realized that, coming to a conclusion on why that was happening and deciding what to change was a matter of seconds. What was wrong is not so relevant, but what’s important is that what followed was a massive refactoring that ended up in a better, cleaner, design and short, concise tests that actually do add value. 

## Good test, bad test
Before today, I thought bad tests could be worse than no tests at all. But today’s experience changed my mind. Now I think that bad tests are better than no tests at all, as long as the people working on those bad tests are aware of it. Every developer I know would be bothered by this. And would eventually rethink it or discuss it and find a better solution. So, how do we stay on top of our tests to know if they suck? Simple, we ask ourselves the question: 

> What value is this test giving me? What does it add to the project?

If you can’t find an answer in the first 5 seconds after asking yourself the question, then that test sucks. And if we repeat the question for every test we write, we can make sure that we end up with valuable tests. Or at least that they seemed valuable at the time, and that equals giving it our best. 

In the end, that’s all we have. Our best. 