---
title: Using Firefox Reader View On Almost Any Website
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from:
excerpt_separator: <!--more-->
---

If you are like me and use [Firefox Reader View](https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages) to make reading websites easier and would like the ability to use this feature on websites that don't support it, there are two ways I have found to implement it.

<!--more-->

The first option is to prepend the URL of the website you are on with the following:

`about:reader?url=`

The second option is to use a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet). Firefox disallows bookmarklets from prepending the above option to a URL, so I had to get a bit creative.

1. Add a bookmarklet; you can do this by right-clicking on the bookmarks toolbar or the bookmarks sidebar in Firefox
2. Click *Add Bookmark...*
3. Give bookmarklet a name such as **Reader View**
4. Copy and paste the JavaScript in the field below into the URL field
```js
javascript:(function(){prompt('Copy the URL below and paste it into the URL bar', 
'about:reader?url='+encodeURIComponent(document.location))})();
```
5. Click **Save**



The bookmarklet above will cause a popup to appear in the center of your browser with a highlighted URL containing both the reader bit and the current URL of the site you are on when you click on the bookmarklet. Just copy and paste it into the address bar and press <kbd>enter</kbd> to load the site in reader mode.

<blockquote>
    <span class="fa-solid fa-triangle-exclamation"></span> 
    Forcing Reader Mode on some websites, such as social media, will likely cause a "Failed to load article from page" error; just click the X at the top left to exit and go back to the regular website
</blockquote>