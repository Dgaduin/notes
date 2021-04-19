### It's Okay To Be Less General

One way I view my growth as a programmer over the last two decades is by tracking my becoming okay with being less general. At the time I wrote the HAL, if someone more senior had told me "just go special-case DV", I almost certainly would have explained how this was terrible design, and probably have gone and pouted about it if required to do the fast thing. I certainly wouldn't have appreciated the value to the business of getting the feature done in a fraction of the time.  
  
In my next model I started learning from the school of hard knocks. I started with a templated data model ("hey, I'm going to reuse this and it'll be glorious") and about part way through recognized that I was being killed by an abstraction tax that wasn't paying me back. (At the time templates tended to crash the compiler, so going fully templated was really expensive.)  I made the right decision, after trying all of the other ones first - very American.  

### Being Less General Makes the Problem Solvable

I wrote [about this previously](http://hacksoflife.blogspot.com/2016/01/work-stealing-and-lock-free-chaos.html), but Fedor Pikus is pretty much saying the same thing - in the very hard problem of lock-free programming, a fully general design might be impossible. Better to do something more specific to your design and have it actually work.  
  
Here's another way to put this: every solution has strengths and weaknesses. You're better off with a solution where the weaknesses are the part of the solution _you don't need_.  

### Don't Solve Every Problem

Turns out [Mike Acton](https://www.youtube.com/watch?v=rX0ItVEVjHc) is kind of saying the same thing. The mantra of the Data-Oriented-Design nerds is "know your data". The idea here is to solve the _specific_ problem that your _specific_ data presents. Don't come up with a general solution that works for your data and other data that your program will literally never see. General solutions are more expensive to develop and probably have down-sides you don't need to pay for.  

### Better to Not Leak

I haven't had a stupid pithy quote on the blog in a while, so here's some parental wisdom: it's better not to leak.  

http://hacksoflife.blogspot.com/2018/08/solve-less-general-problems.html