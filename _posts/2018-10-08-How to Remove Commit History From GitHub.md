---
title: How to Remove Commit History From GitHub
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from: /2018/10/08/How-to-Remove-Commit-History-From-GitHub
excerpt_separator: <!--more-->
---

To begin, open your terminal and `cd` to your project directory.

## Steps
**Check out to a temporary branch**

`git checkout --orphan TEMP_BRANCH`

**Add all files**

`git add -A`

**Commit changes**

`git commit -am "Your commit message here"`

**Delete old main branch**

`git branch -D main`

**Rename temporary branch to main**

`git branch -m main`

**Force update to repository**

`git push -f origin main`

<!--more-->