# Fisher–Yates shuffle
#tech/paradigm/algorithm

The Fisher–Yates shuffle, in its original form, was described in 1938 by Ronald Fisher and Frank Yates in their book _Statistical tables for biological, agricultural and medical research_. Their description of the algorithm used pencil and paper; a table of random numbers provided the randomness.

The basic method given for generating a random permutation of the numbers 1 through N goes as follows:

1. Write down the numbers from 1 through N.
2. Pick a random number k between one and the number of unstruck numbers remaining (inclusive).
3. Counting from the low end, strike out the kth number not yet struck out, and write it down at the end of a separate list.
4. Repeat from step 2 until all the numbers have been struck out.
5. The sequence of numbers written down in step 3 is now a random permutation of the original numbers.

The modern version of the Fisher–Yates shuffle, designed for computer use, was introduced by Richard Durstenfeld in 1964 and popularised by Donald E. Knuth in The Art of Computer Programming as "Algorithm P (Shuffling)". Neither Durstenfeld's article nor Knuth's first edition of The Art of Computer Programming acknowledged the work of Fisher and Yates; they may not have been aware of it. Subsequent editions of Knuth's The Art of Computer Programming mention Fisher and Yates' contribution.

```pseudo
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 down to 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
```

An equivalent version which shuffles the array in the opposite direction (from lowest index to highest) is:

```pseudo
-- To shuffle an array a of n elements (indices 0..n-1):
for i from 0 to n−2 do
     j ← random integer such that i ≤ j < n
     exchange a[i] and a[j]
```

```pseudo
-- To initialize an array a of n elements to a randomly shuffled copy of source, both 0-based:
  for i from 0 to n − 1 do
      j ← random integer such that 0 ≤ j ≤ i
      if j ≠ i
          a[i] ← a[j]
      a[j] ← source[i]
```


---

[Source](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
