---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-09-21T17:44:42.000
---

# Phantom Test

#tech/paradigm/code-quality #tech/paradigm/testing

Test which returns correctly, but not because the code under test is doing the right thing or anything at all.

## Maxim 1:

A test checking that nothing happened must be accompanied by a test checking that something happened

## Maxim 2:

A phantom test proves nothing if it passes.

It indicates a real problem if it fails.

## Maxim 3:

How you arrive at a phantom test matters.

## Maxim 4:

Whenever possible convert phantom tests to real tests.

[Source](https://www.red-gate.com/simple-talk/dotnet/software-testing/the-phantom-menace-in-unit-testing/)
