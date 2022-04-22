---
date_created: +002021-09-03T12:37:05.000
date_modified: +002021-10-05T11:35:43.000
---

# pr_based_development

https://hofmannsven.com/2019/commit-message-driven-development -> https://andrewfeeney.me/articles/commit-message-driven-development

https://news.ycombinator.com/item?id=4386969

It's simple enough to actually work.

It forces you to make a decision.

It removes the friction of starting.

It requires you to single-task.

Here are some of the benefits I discovered while working with this approach:

(This can start with a message file having the header and then adding why)

Scope

It helps me to decide what to work on upfront. The commit message defines the scope and holds me accountable. The commit message is like a micro goal.

Structure

It helps me to logically group and later review my commits because each commit has a precise goal.

Focus

It helps me to remember what I decided to work on.

It also helps me to remember what I was working on in a previous (unfinished or interrupted) session.

-> 'm not sold on doing this at the commit level, but we have been using Pull Requests on Github in this fashion for Wufoo and SurveyMonkey. We start with an initial commit to start the branch for a new feature and then immediately initiate a Pull Request. That pull request contains a list of items that need to be done for the feature and as it gets developed you can see how commits are working towards making that pull request ready. This also helps tremendously with code reviews because you can do them as the feature is being developed.

What's nice about this method for us is that you can just look at the list of active pull requests for a project and see what features are in active development and get an easy way to drill down into the progress of each.

I guess you could call it Pull Request Driven Development.

#self/todo/pin
