---
title: "Day 37: on possibility, part 1"
date: 2018-03-07T17:04:30+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "maybe", "functional programming"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

[Tobias](https://twitter.com/tpflug) told me recently that I should write a more “technical” blog. It’s true, I’ve been focusing much more on the behavioural aspects of Software Craftsmanship and there’s a reason for it: I would’ve probably been a psychologist if I hadn’t studied design. I find the human psyche and behaviour extremely intriguing and I spend a great deal of time thinking about it. Regardless, I think Tobias is right, and I should step out of my “_comfort zone_” and have a stab at a technical post. So, here it is. 

## Maybe
This word represents a possibility. Something’s either possible or impossible, but we don’t really know at the moment. We’ll know eventually, but right now, we don’t. So, maaaybe I’ll be able to finish chapter 12 of the [Haskell Book](http://haskellbook.com/) tomorrow, but I can’t promise anything. In the functional programming world, **Maybe** represents exactly this. And it’s awesome. 

What it encapsulates in my view is ambiguity and delegation. Whenever we're not sure of what the outcome of an operation will be, we can use a **Maybe**. And, we can deal with both options where it's really necessary, and not before. Wrapping my head around the topic has been a challenge for me, but I'm getting there 🦄.

This is how the definition looks like in Haskell: 

{{< highlight haskell >}}

Data Maybe a = Nothing | Just a

{{< /highlight >}}


This means that a Maybe of _a_ can be either Nothing or a Just with _a_ inside of it. What that _a_ means and the rest of the syntax is not important for the purposes of this post. The first set of exercises in chapter 12 of the Haskell Book are about implementing basic functions for the Maybe type. What I’ll do now, is try to implement the same functions (and the type to some extent) in good old Javascript. 

**Note:** If you’re curious as to an actual implementation, I’ll leave a list of resources at the end of the post. 

First things first, there’s no such thing as a datatype with multiple type constructors in Javascript. But, we can fake it!

{{< highlight javascript >}}

// Each possibility in it’s own “type”

const Nothing = () => ({});

const Just = x => ({});

{{< /highlight >}}

They don’t do much, but they do represent the structure as well as possible. 

Right? 

Right you are!

On to the function implementations: 

### isJust
Really straight forward. Takes a Maybe and returns true if it’s a Just, false if it’s a Nothing. 

{{< highlight haskell >}}

isJust :: Maybe a -> Bool
isJust Nothing = False
isJust (Just _) = True

{{< /highlight >}}

In Javascript, it’s not so simple, since we don’t have pattern matching, so we can’t just ask our code directly like this. If we had used prototypes for our type definitions, we could’ve used something like **_instanceof_** but that’s icky and I don’t like it. So, here’s how I would write this one: 

{{< highlight javascript >}}

// delegate responsibility to the type

const isJust = x => x.isJust();

{{< /highlight >}}

And then on our types: 

{{< highlight javascript >}}

const Nothing = () => ({
  isJust: () => false
});

const Just = x => ({
  isJust: () => true
});

{{< /highlight >}}

### isNothing
Same thing, but the other way around. Haskell: 
{{< highlight haskell >}}

isNothing :: Maybe a -> Bool
isNothing = not . isJust

{{< /highlight >}}
_The . (dot) there is compose operator in Haskell, so whatever isJust returns gets passed to “not”, which just negates it._

And in Javascript: 

{{< highlight javascript >}}

const isNothing = x => !x.isJust();

{{< /highlight >}}

Same ol. 

### maybeCatamorph
According to [Wikipedia](https://en.wikipedia.org/wiki/Catamorphism), a Catamorphism is: 

> In functional programming, catamorphisms provide generalizations of folds of lists to arbitrary algebraic data types, which can be described as initial algebras. The dual concept is that of anamorphism that generalize unfolds. A hylomorphism is the composition of an anamorphism followed by a catamorphism.

According to me, it’s a way to take something out of a box, while changing what’s inside. In Haskell: 

{{< highlight haskell >}}

maybeCatamorph :: b -> (a -> b) -> Maybe a -> b
maybeCatamorph x _ Nothing = x
maybeCatamorph _ f (Just a) = f a

{{< /highlight >}}

The first argument to the function is the value we want to get in case our Maybe is a Nothing. 

In Javascript: 

{{< highlight javascript >}}

const maybeCatamorph = b => f => x => x.fold(b, f);

{{< /highlight >}}

And in our types: 

{{< highlight javascript >}}
// I called it fold, but you get the idea. 

const Nothing = () => ({
  isJust: () => false,
  fold: (b, f) => b
});

const Just = x => ({
  isJust: () => true,
  fold: (b, f) => f(x)
});

{{< /highlight >}}

Once again, since we can’t pattern match in Javascript, we need to delegate the responsibility of knowing how to act to each possible type. In this case, both Nothing and Just have the same signature for fold, but do different things with it. The same things that their Haskell counterparts do. 

### fromMaybe
This time there’s no manipulation. It’s the same thing as before, only we’re not changing what’s inside our 📦, just returning it or a default value in case it’s Nothing. 

{{< highlight haskell >}}

-- in terms of the catamorphism cause the book said so.

fromMaybe :: a -> Maybe a -> a
fromMaybe x = maybeCatamorph x id

{{< /highlight >}}

That _id_ in there is the identity function, which is just a function that returns whatever gets passed to it (id x = x).

For our Javascript version, we can also define an id function and do the same thing: 

{{< highlight javascript >}}

const identity = x => x;

const fromMaybe = b => x => x.fold(b, identity);

{{< /highlight >}}

_While implementing this, I forgot that JS doesn’t curry functions by default and kept getting wrong results. Whelp._

### listToMaybe & maybeToList
When coming from a List, get the first element of the list inside a Just or Nothing if the List is empty. 

When coming from a Maybe, get a List of length 1 with the element inside it if it was a Just, or an empty list if it was a Nothing. 

{{< highlight haskell >}}

listToMaybe :: [a] -> Maybe a
listToMaybe [] = Nothing
listToMaybe (x:xs) = Just x

maybeToList :: Maybe a -> [a]
maybeToList Nothing = []
maybeToList (Just x) = [x]

{{< /highlight >}}

And in Javascript, thanks to [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), we can pretty much do the same thing for the first one:

{{< highlight javascript >}}

const listToMaybe = ([head, ...tail]) => head
                                         ? Just(head)
                                         : Nothing();

{{< /highlight >}}

The second one is a bit trickier. Once again, since we don’t have pattern matching in Javascript, we have no direct way of accessing what’s inside our Maybe. Luckily, we already wrote a function for that. 

{{< highlight javascript >}}

const maybeToList = x => isJust(x)
                         ? [fromMaybe(_)(x)]
                         : [];

{{< /highlight >}}

If we're using Node, it’s useful to add an **inspect** function to our types at this point so we can see what’s going on when we log them somewhere.

{{< highlight javascript >}}

const Nothing = () => ({
  isJust: () => false,
  fold: (b, f) => b,
  inspect: () => `Nothing`
});

const Just = x => ({
  isJust: () => true,
  fold: (b, f) => f(x),
  inspect: () => `Just${x}`
});

{{< /highlight >}}

## The end
Is not really the end. My very shallow Maybe doesn’t really do much at this point, but the idea wasn’t to implement a fully fledged Maybe. It was more an attempt to see the differences between the languages in a practical way. It’s clear that Javascript has a lot of shortcomings when it comes to FP and seeing them in action when we write all those workarounds for simple things is quite interesting for me. And, like the title implies, this is the first in a series of Javascript / Haskell comparisons, where I'll try to get a deeper understanding of both. 

## Actual Maybes
Here’s a list of resources for real JS implementations of these concepts: 

* A post on building some of the functionality of Maybe in JS: [Building a Maybe in JavaScript](http://developingthoughts.co.uk/building-a-maybe-in-javascript/)
* [Sanctuary JS](https://github.com/sanctuary-js/sanctuary), an FP library for Javascript which includes Maybe and Either. Both types adhere to the [Fantasy Land spec](https://github.com/fantasyland/fantasy-land/tree/v3.4.0).
* [Folktale](http://folktale.origamitower.com/), another library. The difference is that this one provides more types 😊 