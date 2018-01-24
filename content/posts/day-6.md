---
title: "Day 6: on learning"
date: 2018-01-23T08:29:17+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "learning", "bash"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

I've always felt like I'm a good learner. It's on my CV even, "Daniel Bolívar: Good Learner. But after today, I don't know if it's that easy, and defining **Good Learning** or **Good Learners** seems really subjective, and therefore error prone. Today, I learned some **Bash**. But more importantly, I thought a lot about what **learning** really means.

## Why do we learn what we learn?

And how do we learn? I don’t have an answer, and there are a lot of really smart people researching that topic. Here’s a sample: [The Science of How We Learn](https://www.learningandthebrain.com/Event-341/The-Science-of-How-We-Learn/). But there’s also a decision making process that comes before even attempting to learn something. So, how do we decide what we should learn? The wording here is important. Using _should_ in the question forces us to think of an obligation. What are we supposed to be learning, or what should we already know at any given point in time. And even though there are always things we _should_ know, I believe making a decision solely on that is the wrong approach.

Instead of an obligation, learning should be about yearning. We want to learn new stuff, and I would go so far as to assert that it’s easier to learn new things when we’re genuinely interested in them. All that remains is aligning what we want to learn with the things we should be learning. And that’s the tricky part.

## Bashing my head against Bash

If you had asked me one year ago if I was interested in learning Bash, I would’ve probably said no. At that time, I was focused on doing my job better, which was Frontend Development, and more specifically, Javascript. I devoted a lot of time to learning JS and I had no space for anything else. Now that I’m more confident in my JS abilities, I can start branching out into other areas of knowledge. Even then, I wouldn’t have considered Bash as a topic I genuinely wanted to learn. But after [exposing my ignorance](https://www.dabolivar.com/posts/day-3/), I realized Bash was a serious gap in my knowledge. And even though I probably won’t end up being a super user, I was immediately motivated to fill that gap.

I went through [Learn Bash the Hard Way](https://leanpub.com/learnbashthehardway) from [Ian Miell](https://zwischenzugs.com/). It took me about 10 hours or so to read it while doing some of the exercises and a lot of backtracks when I realized I had already forgotten something. The book is great, and I wholeheartedly recommend it to anyone interested in getting some Bash experience under their belt. I can confidently say, that I’m no longer entirely clueless when it comes to Bash, and even though it may still take me some time, I can probably read a script and understand what’s going on.

Here are some useful tidbits I got from the book:

{{< highlight bash >}}

# Reusing the last argument passed to the previous command:

$ <cmd> !$

# Starting a here doc, which is basically creating a file
# and typing into it directly:

$ cat > myFile << ‘END’ # can also be EOF, or anything really

# Copying the standard output of a command to the clipboard:

$ <cmd> | pbcopy
{{< /highlight >}}

There’s a lot more to the book than that of course, but to the complete novice that I was, getting to the point where I’m now confidently using commands like that feels great.

## Tools in a belt

I still don’t believe I’ll use Bash extensively. What I did get from the exercise of learning parts of it, is a new tool in my belt. I’m not speaking like a collector, I don’t want to know a bit of everything there is to know. But I do want to know at least a bit about the things I find can be important in my daily work. Where before I would’ve never thought of Bash as the solution to any of my problems, I can now at least take it into consideration. It’s become something I can pull out and use to solve an issue. And that in itself, is quite valuable.

I found the motivation to learn Bash while confronting my ignorance. And after going through the motions of learning it, I’m convinced it will prove valuable in the future. So, the next time I’m deciding what I want/should learn, I’ll ask myself 3 questions:

* Is there something I **really want** to learn?
* Is there something that I’m completely ignorant in and **want to change** that?
* Is there something I **should** definitely learn?

I’m sure something will come from answering them.
