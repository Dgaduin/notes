---
date_created: +002020-10-02T16:13:05.000
date_modified: +002021-03-04T15:38:46.000
---

# Git Relative Commit Navigation

#tech/tool/git

# ^

`^` points to the commit right behind the current one and can be stacked like `HEAD^^^^`.

If there are multiple parents you can provide a number after the symbol to select the specific parent like `HEAD^2`.

# ~

`~` points to n-th commit behind like: `HEAD~10` will point 10 commits behind.

It's very useful to use for squashing or reordering recent history, e.g. `git rebase -i HEAD~10`.
