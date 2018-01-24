---
title: "Day 2: on doing"
date: 2018-01-17T16:06:53+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "Haskell"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

While the first day was mostly about formalities and sharing information, the second day was all about doing. The action took two different shapes: setting up this blog, and going through the first chapter of the [Haskell Book](http://haskellbook.com/).

## Fastest way to set up a simple blog

Ok, maybe not the fastest, since there are 1 click services nowadays. But the easiest “developer” way of setting up a simple blog for sure. It involves 2 products.

* [Hugo](https://gohugo.io/) -> my static site generator of choice. I had heard great things about it but never actually used it, so this was a perfect opportunity to try it out.
* [Netlify](https://www.netlify.com/) -> hosting platform. This one I had used once before, and the process was so painless the decision to use it again was a no-brainer.

Since I didn’t want to spend more than a couple hours setting up the platform, I followed [Hugo’s quick start](https://gohugo.io/getting-started/quick-start/) and chose a [blogging theme](https://themes.gohugo.io/tags/blog/) from their website. It’s called [Minimo](https://themes.gohugo.io/minimo/), and it’s simple enough that it didn’t take too much effort to configure, yet has enough features to fit my needs. Also, I think it looks nice 🙌.

At this point I had a GitHub repository with my blog’s code (first post included) and was ready to deploy it to Netlify. I already had a Netlify instance, so this part was a breeze. I did hit one minor bump in the road when the wrong version of Hugo was being used on deployment by default, but some quick googling landed me [this article](https://www.netlify.com/blog/2017/04/11/netlify-plus-hugo-0.20-and-beyond/) and that solved my issue immediately.

The cool thing about this setup, is that I only need to push a new post to the master branch in my GitHub repo and it’ll get immediately deployed. The whole process was easy, fast and definitely worth it for anyone trying to set up a simple blogging system.

### Edit

A friend of mine asked me

> Why Hugo on Netlify instead of Jekyll on Github Pages?

It was 100% because of [Sara Soueidan's post on migrating to Hugo and Netlify](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/). After going through it, I believe I made the right choice.

## Haskell, FP and Lambda Calculus

The day went from a stroll in the park, to a dive at the deep end of the pool. At least that’s how I felt. I went from feeling completely in control with my blog setup, to starting a subject I knew close to nothing about.

A bit of background: as part of the apprenticeship, I need/want to learn a new programming language. I’ve been interested in Functional Programming for the past year but most of my exploration has been deeply rooted in Javascript, the programming language I’m most comfortable with. Haskell checked all the boxes. I could fulfil my desire to learn something entirely new while also delving deeper into the functional paradigm. And today, I went through the first chapter of the book, the one dedicated to Lambda Calculus.

I started the chapter with a bit of apprehension. My math bases were shaky to say the least, and that name carries around a bad reputation. But my fears turned out to be completely unfounded, as the [Haskell Book](http://haskellbook.com/) delivers on it’s promise of teaching without assuming any previous background. Of course, some algebra is needed, but apart from that, the chapter felt incredibly accessible. Needless to say, it left me wanting to read more, an amazing sensation on an academic book. I won’t go into any explanations or details about Lambda Calculus, since there are a lot of resources out there, and the [Haskell Book](http://haskellbook.com/) is at the top of the list.

I will leave you with the following picture though, just in case you’re wondering how studying lambda calculus looks like ⬇
{{% center %}}
![Lambda Calculus Beta Reduction exercises](/img/lambda_study.jpg)
{{% text s="0.8" %}}
_Improving my handwriting could also be an apprenticeship goal_
{{% /text %}}
{{% /center %}}
