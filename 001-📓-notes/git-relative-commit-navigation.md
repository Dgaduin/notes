# Git relative commit navigation
#tech/tool/git 

# ^

`^` points to the commit right behind the current one and can be stacked like `HEAD^^^^`.
If there are multiple parents you can provide a number after the symbol to select the specific parent like `HEAD^2`.

# ~

`~` points to n-th commit behind like: `HEAD~10` will point 10 commits behind.
It's very useful to use for squashing or reordering recent history, e.g. `git rebase -i HEAD~10`.