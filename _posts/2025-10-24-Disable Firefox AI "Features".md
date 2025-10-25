---
title: Disable Firefox AI "Features"
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from: /2025/10/24/Disable-Firefox-AI-Features
excerpt_separator: <!--more-->
---

Open `about:config` in Firefox's url bar and click "Accept the Risk and Continue"

Search for the following preferences and make sure they are toggled to `false`

`browser.ml.enable`

`browser.ml.chat.enabled`

`extensions.ml.enabled`

`browser.ml.linkPreview.enabled`

`browser.tabs.groups.smart.enabled`

`browser.tabs.groups.smart.userEnabled`

If any of these are set to `true`, toggle the preference by clicking the double arrow button on the right side of the preference name

<!--more-->