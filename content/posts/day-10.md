---
title: "Day 10: on white belts"
date: 2018-01-29T16:54:28+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "White Belt", "bash"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

I have something to confess. Today, I failed to follow one of the two patterns I described a [while back](https://www.dabolivar.com/posts/day-3/#reflecting-on-knowledge-and-ignorance): I didn’t wear the white belt. I charged with my prior knowledge into a domain I had never tackled before. And the results were as disastrous as you may imagine them.

## The whitest bash belt to have ever bashed
I was attempting the following exercise: [Contacts program in bash](https://www.shellscript.sh/exercises.html#addressbook) and I decided it was important to not have duplicates. Because you never want to find out you have two entries by the name **Emergency Doctor** and not know which one to call in, you know, an emergency.

In my mind, this seemed trivial. At the moment of adding a new contact, I would go to my current list, check if any of my contacts already had the same name, and if so, politely ask myself to give this new contact a different name. Easy Peasy. A quick 5 minutes of googling later, I found out that you can use **grep** and **wc** in conjunction for exactly what I wanted. So, I went ahead and wrote the following masterpiece:

{{< highlight bash >}}
already_exists() {
	return grep “$@” $CONTACTS | wc -l
}
{{< /highlight >}}

Yeah… that doesn’t work. Loudly. It yells at you, begging you to stop. Looking back at it, I should’ve known something was wrong at this moment, but I didn’t. I just went and kept trying to make my JS mindset work. So, I did this:

{{< highlight bash >}}
already_exists() {
	numresults= $(grep “$@“ $CONTACTS | wc -l)
	return numresults
}
{{< /highlight >}}

And it didn’t blow up. The word **Success** started flying through my mind ✨. Then I tried to use it and nothing happened. Turns out, this doesn’t work either. This is the result of calling that function, no matter the conditions:

{{< highlight bash >}}
already_exists “Fluffy”
 
 
{{< /highlight >}}

If you’re wondering where the result is, it’s right there. It’s nothing. Nichts. Nada.

> You can’t return anything other than exit codes in Bash. 

I’m not going to eternally bore you with all my attempts at making that work, including some futile debugging attempts. What’s important here is that I was trying to fit my old knowledge into a new domain. I was attempting to solve this problem like I would’ve solved it in Javascript. I wasn’t **wearing the white belt** at all, and if only I had remembered my own writing, I would’ve understood that maybe things work differently in Bash. Instead of assuming that it was all some silly syntax error, and that my thought process was accurate.

It can be pretty easy to forget ourselves and fall into this trap. Like a child who really wants to solve a puzzle and starts mashing pieces together, forcing them to fit. Or the young me who disassembled a Rubick’s Cube only to piece it back together in the right order. We often hear the phrase **_We are the sum of our experiences_**. And while that is what makes us who and what we are, it can sometimes work against us.

_P.S:_ I eventually figured out what was happening, and ended up doing something like this: 

{{< highlight bash >}}
already_exists() {
	grep -i -q "$@" $CONTACTS
}

# Then, somewhere else
already_exists “Real Name”
if [ $? -eq 0 ]; then
	# That means it already exists. 
fi
{{< /highlight >}}

(Which works, although I’m pretty sure it’s far from optimal).