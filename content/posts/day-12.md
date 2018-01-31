---
title: "Day 12: on exploring"
date: 2018-01-31T17:02:01+01:00
draft: false
authors: ["danielbe"]
tags: ["apprenticeship", "exploring", "javascript"]
images: ["/img/danielbolivar_avatar.jpeg"]
twitterbase: 
  image: /img/danielbolivar_avatar.jpeg
  caption: Aspiring Software Crafter blog. New content daily.
---

Have you ever had an idea that you just need to try out? I have. And today, during our [daily Kata](https://github.com/holidaycheck/coding-katas) on Matrix Multiplication, we started thinking about how to turn the whole process into an asynchronous operation, which could then be distributed any number of processes and stitched back together in the correct order once everything is done. As the numbers on the clock neared the fated hour that would mark the end of the Kata, I had an idea on how to do this. And I know it goes against the spirit of the Kata (sorry [Wolfram](https://twitter.com/wolframkriesing)), but I just had to try it out. I call this feeling of not being able to stop myself from testing something, **explorer mode**. 

## Lightbulbs
I always enjoyed the lightbulb metaphor for ideas, but only when used to light dark places. But the lightbulb doesn’t help if we don’t follow the light, does it? My **explorer mode** is very much about testing assumptions and willingly jumping into the rabbit hole that those may lead to. I firmly believe that assuming something and trying to prove it is one of the single, simplest, most efficient learning techniques known to mankind. Or to me, which counts as part of mankind at least. 

The process goes something like this: 

* Find a problem. 
* Think about a possible solution to this problem, and how you can get there. 
* Give it 5 minutes of further thought, trying to find reasons why that solution just won’t work. 
* Go and test your solution in an appropriate environment (in my case, [TDD bin](http://tddbin.com/)).

The good thing about **explorer mode** is that it immediately puts you in a state of mind where everything is possible. If the assumption fails, well, so be it. You probably still learned something while trying to make it work. And if it does work, hooray! You now have a new way to solve a problem. 

In my specific case, I finally figured out how [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) works and I doubt I’ll forget it again. And, this is the result 🙌: 

{{% center %}}
![Current Test Status](/img/current_tests.png)
{{% text s="0.8" %}}
_The badges on the right means they're asynchronous ✨_
{{% /text %}}
{{% /center %}}

_P.S: if you’re interested in going through the convoluted mess of code that my 20 mins exploration session created, it’s down there_ ⬇⬇⬇

{{< highlight javascript >}}
// Helper to flatten a nested array
const flatMap = (f,xs) =>
  xs.map(f).reduce((acc, cur) => acc.concat(cur), []);

  
/*
  Turns this: [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  Into this: [
    [1, 3, 5],
    [2, 4, 6]
  ]
*/
const transpose = (m) => {
  return m[0].reduce((acc, _, colIndex) => 
    [...acc, m.map(row => row[colIndex])],
  []);
}


// Sum of products in 2 different matrix rows
const calculateCell = (row1, row2, rowIndex, index) => {
  // Fake async with a Timeout and provide info on how to restitch the pieces
  return new Promise((resolve, reject) => {
    setTimeout(resolve, Math.round(Math.random(0, 1) * 100), {
      index: `${rowIndex}-${index}`,
      result: row1.reduce((result, value1, index) =>
      result + value1*row2[index]
    , 0)
    });
  })
}


// Turns the flattened calculations into the result matrix
const stitchResults = results => 
  results.reduce((acc, cur) => {
    const indexes = cur.index.split('-');
    acc[indexes[0]] = acc[indexes[0]] || [];
    acc[indexes[0]][indexes[1]] = cur.result;
    return acc;
  } ,[]);

// Entry point
const multiply = (m1, m2) => {
  const m2T = transpose(m2);
  return Promise.all(
      flatMap(
        (row1, rowIndex) => 
          m2T.map((row2, index) => 
            calculateCell(row1, row2, rowIndex, index)), m1)
      )
      .then(stitchResults);
}

// Tests after this line



it('transpose nxn matrix', () => {
    const m1 = [
      [1,2,3],
      [4,5,6]
    ];
    const transposedM1 = [
      [1,4],
      [2,5],
      [3,6]
   ];
  
  assert.deepEqual(transpose(m1), transposedM1);

});

it('multiply 1x2 matrix with 2x2', ()=> {
  const m1 = [
    [1, 2]
  ];
  
  const m2 = [
    [3, 4],
    [5, 6]
  ];
  
  const expected = [
    [13, 16]
  ]
  
  return multiply(m1, m2)
    .then(resultMatrix => assert.deepEqual(resultMatrix, expected));
});

it('multiply 3x2 matrix with 2x2', ()=> {
  const m1 = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  const m2 = [
    [7, 8],
    [9, 10]
  ];
  
  const expected = [
    [25, 28],
    [57, 64],
    [89, 100]
  ]
  
  return multiply(m1, m2)
    .then(resultMatrix => assert.deepEqual(resultMatrix, expected));
});

it('multiply 2x3 matrix with 3x2', ()=> {
  const m1 = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  const m2 = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  
  const expected = [
    [58, 64],
    [139, 154]
  ];
  
  return multiply(m1, m2)
    .then(resultMatrix => assert.deepEqual(resultMatrix, expected));
});

it('multiply 3x4 matrix with 4x2', ()=> {
  const m1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]  
  ];
  
  const m2 = [
    [13, 14],
    [15, 16],
    [17, 18],
    [19, 20]
  ];
  
  const expected = [
    [170, 180],
    [426, 452],
    [682, 724]
  ];
  
  return multiply(m1, m2)
    .then(resultMatrix => assert.deepEqual(resultMatrix, expected));
});

it('multiply 3x4 matrix with 4x3', ()=> {
  const m1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]  
  ];
  
  const m2 = [
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21],
    [22, 23, 24]
  ];
  
  const expected = [
    [190, 200, 210],
    [470, 496, 522],
    [750, 792, 834]
  ];
  
  return multiply(m1, m2)
    .then(resultMatrix => assert.deepEqual(resultMatrix, expected));
});
{{< /highlight >}}