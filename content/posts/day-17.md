---
title: "Day 17: on triangles"
date: 2018-02-07T16:54:32+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "testing"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

Today, I’ll follow up on [yesterday’s topic](https://www.dabolivar.com/posts/day-16/). You can read up on it if you like, but the gist of it is that beginning anything with a positive assumption is probably better than the opposite. In the web it’s called **Optimistic Updates**. And after today, I think we can extend the idea to the way we write tests as well. 

## Coffe & Triangles
In the morning, I met with  [Tobias](https://twitter.com/tpflug) and [Chris](https://twitter.com/c089) in a cozy coffee shop to discuss and write a bit of code. We paired on the problem that [Evren](https://twitter.com/yortuc) describes in this medium post:  [Counting Triangles – Evren Yortuçboylu – Medium](https://medium.com/@yortuc/counting-triangles-8c92ab998682). The idea is that, given a set of lines, our program should find out how many triangles are created by them. It’s very mathematical and I won’t go into any details here. What I want to talk about, is the approach we took today to solving the problem. And how it blew up in our faces 🔥.

Our first test went something like _given these 3 lines that do form a triangle, return the correct result of 1_. So far so good. And then I derailed us entirely by proposing that our next tests should be about the **negative** cases. Fast forward 1 hour and 15 minutes, and we had the following set of tests: 

{{< highlight javascript >}}
const A = {x: 0, y: 0};
const B = {x: 100, y: 0};
const C = {x: 50, y: 100};
const D = {x: 5555, y: 5555};

it('Finds a triangle where there is one', () => {
  const lines = [
    [A, B],
    [B, C],
    [C, A]
  ];
  const expected = 1;
  const actual = countTriangles(lines);
  assert.equal(actual, expected);
});

it('Does not find a triangle where there are no connections between first and last line', () => {
  const lines = [
    [A, B],
    [B, C],
    [C, D]
  ];
  const expected = 0;
  const actual = countTriangles(lines);
  assert.equal(actual, expected);
});

it('Does not find a triangle where there are no connections between second and last line', () => {
  const lines = [
    [A, B],
    [B, C],
    [A, D]
  ];
  const expected = 0;
  const actual = countTriangles(lines);
  assert.equal(actual, expected);
});

it('Does not find a triangle where there are no connections between first and second line', () => {
  const lines = [
    [A, B],
    [D, C],
    [C, A]
  ];
  const expected = 0;
  const actual = countTriangles(lines);
  assert.equal(actual, expected);
});
{{< /highlight >}}

And, a pair of ugly functions that did the bare minimum to make our tests pass and looked sort of like this: 

{{< highlight javascript >}}
const areNotConnected = (line1, line2) => {
  return line1[0] !== line2[1];
}

const countTriangles = lines => {
  if(
    areNotConnected(lines[0], lines[2]) ||
    areNotConnected(lines[2], lines[1]) ||
    areNotConnected(lines[1], lines[0])
  ) {
    return 0;
  }
  return 1;
};
{{< /highlight >}}

**Note:** We were writing Ruby, so just imagine for a second that Javascript can manage object equality.

At this point, we knew what our next step should have been: Add all possible comparisons that define wether a pair of lines are connected or not (without counting intersections, just endpoint connections). But, believe it or not, after trying for 30 minutes or so, we couldn’t write a test that would drive us there. We reached an impasse in our process. 

We eventually reached the conclusion that my choice of negative case tests had driven us into a metaphorical wall. There was no simple, small step that we could take to keep on going. There were huge leaps that would clean up our mess, but that’s just not the way it should happen. 

I believe that positive case tests would have taken us on another road entirely, one that would’ve never reached such an early bump. And seeing the garbled mess left behind, I think it’s pretty safe to assure that **TDD** by itself **does not** guarantee anything even remotely close to good design. I didn’t have time to test out my hypothesis about positive test cases, but I’m not yet done with this whole triangle business. Far from it. 