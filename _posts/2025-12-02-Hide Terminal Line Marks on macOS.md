---
title: Hide Terminal Line Marks on macOS
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from:
excerpt_separator: <!--more-->
---

You can hide terminal line marks by entering the following command into the terminal

```
defaults write com.apple.Terminal ShowLineMarks -int 0
```


If you want to enable line marks again enter the same command replacing the `0` with a `1`

```
defaults write com.apple.Terminal ShowLineMarks -int 1
```