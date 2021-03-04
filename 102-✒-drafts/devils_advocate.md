# Devil's advocate

#self/todo/pin

Clipped from: https://blog.ploeh.dk/2019/10/07/devils-advocate/
The Devil's Advocate technique is a heuristic you can use to evaluate whether more test cases would improve confidence in the test suite. You can use it to review existing (test) code, but you can also use it as inspiration for new test cases that you should consider adding. 
The technique is to deliberately implement the system under test incorrectly. The more incorrect you can make it, the more test cases you'll be likely to have to add. 
When there's only a few test cases, you can probably get away with a decidedly unsound implementation that still passes all tests. These are often simpler than the 'intended' implementation. In this phase of applying the heuristic, this clearly demonstrates the need for more test cases. 
At a later stage, you'll have to go deliberately out of your way to produce a wrong implementation that still passes all tests. When that happens, it may be time to stop. 
The intent of the technique is to uncover how many test cases you need to protect against common defects in the future. Thus, it's not a measure of current code coverage. 