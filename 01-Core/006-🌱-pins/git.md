---
date_created: +002020-09-15T11:24:57.000
date_modified: +002021-10-05T11:15:26.000
---

# Git Amend

#self/todo/pin

```
  &#39;git for-each-ref --sort=-committerdate&#39;
```

```
 git diff master..develop # see diff between branches
```

[How can I extract a portion of a git repository into it&#39;s own repo while retaining history and file structure? - Stack Overflow](https://stackoverflow.com/questions/25274614/how-can-i-extract-a-portion-of-a-git-repository-into-its-own-repo-while-retaini)

```
git whatchanged —-since=‘2 weeks ago’
```

```
git gc --prune=now --aggressive
```

git rebase somehash^ -i --autoquash

```yaml
title: Git Goodies
```

# Git Goodies

#tech/tool/git #self/todo/pin

$ git shortlog -sn --all --no-merges
 80 Harry Roberts
 34 Samantha Peters
 3 Tom Smith

The shortlog gives us summaries of git log; the -s flag will suppress commit description and provide a commit count summary only, and the -n flag will sort output according to the number of commits per author instead of author alphabetic order. The --all flag logs all branches, and --no-merges ensures that merge commits aren’t being counted.

The above shows all commits for the lifetime of the project, but if you want to see how much people have done during a specified timeframe, you can use the --since and --until flags:

git shortlog -sn --since='10 weeks' --until='2 weeks'

 59 Harry Roberts
 24 Samantha Peters

I have this aliased to git stats.

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

git diff --word-diff

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

It’s not uncommon for me to jump between lots of different branches on any given project, and keeping track of them can be pretty tricky. We can get Git to help us work this out:

git for-each-ref --count=10 --sort=-committerdate refs/heads/ --format="%(refname:short)"

This will show us the last 10 (--count=10) branches that we worked on, sorted by the time that we were last working there. It only shows us local branches (refs/heads/) and in a much nicer --format.

This is a bit verbose to commit to memory, so I have it aliased to git recent.

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

Clipped from: https://victorzhou.com/blog/git-aliases/ $ git commit --amend --no-edit

This amends your staged changes into your most recent commit without changing its commit message (so Git won’t open a text editor!)

last = log -1 HEAD

lo = log --oneline -n 10

From <https://victorzhou.com/blog/git-aliases/>

git status --porcelain

```yaml
title: Git Goodies
```

# Git Goodies

#tech/tool/git #self/todo/pin

$ git shortlog -sn --all --no-merges
 80 Harry Roberts
 34 Samantha Peters
 3 Tom Smith

The shortlog gives us summaries of git log; the -s flag will suppress commit description and provide a commit count summary only, and the -n flag will sort output according to the number of commits per author instead of author alphabetic order. The --all flag logs all branches, and --no-merges ensures that merge commits aren’t being counted.

The above shows all commits for the lifetime of the project, but if you want to see how much people have done during a specified timeframe, you can use the --since and --until flags:

git shortlog -sn --since='10 weeks' --until='2 weeks'

 59 Harry Roberts
 24 Samantha Peters

I have this aliased to git stats.

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

git diff --word-diff

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

It’s not uncommon for me to jump between lots of different branches on any given project, and keeping track of them can be pretty tricky. We can get Git to help us work this out:

git for-each-ref --count=10 --sort=-committerdate refs/heads/ --format="%(refname:short)"

This will show us the last 10 (--count=10) branches that we worked on, sorted by the time that we were last working there. It only shows us local branches (refs/heads/) and in a much nicer --format.

This is a bit verbose to commit to memory, so I have it aliased to git recent.

From <[Little Things I Like to Do with Git &ndash; CSS Wizardry &ndash; Web Performance Optimisation](https://csswizardry.com/2017/05/little-things-i-like-to-do-with-git/)>

Clipped from: https://victorzhou.com/blog/git-aliases/ $ git commit --amend --no-edit

This amends your staged changes into your most recent commit without changing its commit message (so Git won’t open a text editor!)

last = log -1 HEAD

lo = log --oneline -n 10

From <https://victorzhou.com/blog/git-aliases/>

git status --porcelain

"Porcelain" is the material from which toilets are usually made (and sometimes other fixtures such as washbasins). This is distinct from "plumbing" (the actual pipes and drains), where the porcelain provides a more user-friendly interface to the plumbing.

Git uses this terminology in analogy, to separate the low-level commands that users don't usually need to use directly (the "plumbing") from the more user-friendly high level commands (the "porcelain").

[terminology - What does the term &quot;porcelain&quot; mean in Git? - Stack Overflow](https://stackoverflow.com/questions/6976473/what-does-the-term-porcelain-mean-in-git)

git whatchanged -p my_file.rb

git show development:my_file.txt

git diff development -- my_file.rb

https://densitylabs.io/blog/5-useful-tricks-you-didn't-know-for-git

git config `ff = only` `conflictstyle = diff3` `followTags = true` `showUntrackedFiles = all`

update last local commit

`git add . ; git commit --amend --no-edit`

SPLITTING COMMITS

In interactive mode, you can mark commits with the action "edit". However, this does not necessarily mean that git rebase expects the result of this edit to be exactly one commit. Indeed, you can undo the commit, or you can add other commits. This can be used to split a commit into two:

```
Start an interactive rebase with git rebase -i <commit>^, where <commit> is the commit you want to split. In fact, any commit range will do, as long as it contains that commit.

Mark the commit you want to split with the action "edit".

When it comes to editing that commit, execute git reset HEAD^. The effect is that the HEAD is rewound by one, and the index follows suit. However, the working tree stays the same.

Now add the changes to the index that you want to have in the first commit. You can use git add (possibly interactively) or git gui (or both) to do that.

Commit the now-current index with whatever commit message is appropriate now.

Repeat the last two steps until your working tree is clean.

Continue the rebase with git rebase --continue.
```

If you are not absolutely sure that the intermediate revisions are consistent (they compile, pass the testsuite, etc.) you should use git stash to stash away the not-yet-committed changes after each commit, test, and amend the commit if fixes are necessary.

[Git - git-rebase Documentation](https://git-scm.com/docs/git-rebase#_splitting_commits)

```yaml
title: Git bisect
```

# Git Bisect

#self/todo/pin

GIt bisect is a binary search process against a commit chain, with manual marking
