---
title: "Day 16: on optimism"
date: 2018-02-06T15:53:53+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "optimism"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

No good has ever come from the phrase _“I don’t think that’ll work”_. No-one has embarked in a journey of discovery with the assumption that it would fail. I would go so far as saying that a defeatist attitude can only end in defeat. And there’s a big difference between accepting defeat and starting out already defeated.

## Optimistic Roads
In web development we have so called **Optimistic Updates**. The idea behind them, is that whenever we have an asynchronous operation, we act in the client as if the operation is successful. So, imagine you’re posting some very important opinions on **NotRealSocialMediaSite**. In the case where everything works as expected, the website could react in two different ways: 

- It stops, an ugly spinner appears on your screen and after a couple seconds, a success message shows up, telling you that your content was indeed saved. **Note:** The spinner may not be ugly. It could be beautiful 🦄. But let’s face it, even the best looking spinner isn’t what an user wants on her screen. 
- The website shows your content as saved immediately. That’s more or less it. No spinner, no _success_ toast, just an instant reaction to user input.

In the first case, we’re being pessimistic. We don’t know if our operation will succeed, so we wait until we can be sure and then communicate it. On the second one, we’re optimistic, we assume it’s going to work, and if it does, we don’t need to do anything else. Of course, in the case something fails, the first way is easier to handle, as the second one would force us to say something bad, probably in red or with a red background, and backtrack a bit. But that’s fine, we want to build systems where operations are successful more often than not, don’t we?

Today, I asked [Wolfram](https://twitter.com/wolframkriesing) if he thought **HolidayCheck** was ready for something. He assumes we are ready, and acts based on that assumption. This got me thinking that maybe we can use the idea behind **Optimistic Updates** in our everyday life. We could plan things positively and see what happens. I know I’ve lost many an hour thinking about all the ways something could go wrong, trying to plan countermeasures to each of those scenarios. The truth is, you can never plan ahead for every possibility of failure. So, if we can’t have backup plans for every possibility, why should we even bother to cover some of them, instead of the possibility of success?

I’m not saying that if we follow this path we would magically always succeed. But then again, if we assume we can’t win, we probably won’t. If we start out thinking we will, then even though we may lose a lot, we also expose ourselves more to the possibility of winning. And those are better odds in my book. 