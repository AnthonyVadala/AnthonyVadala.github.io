---
title: Twitter Cards & Open Graph on Jekyll
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from: 
    - /2018/10/15/Twitter-Cards-&-Open-Graph-on-Jekyll
    - /posts/2018/10/15/Twitter-Cards-&-Open-Graph-on-Jekyll
excerpt_separator: <!--more-->
---

<!--more-->

## Getting Started
{% raw %}
In Jekyll, there are two types of variables:
- `{{ site.VARIABLENAME }}` for the entire Site located in `_config.yml` ([mine](https://github.com/AnthonyVadala/AnthonyVadala.github.io/blob/main/_config.yml))
- `{{ page.VARIABLENAME }}` for a specific Page located in the front matter block (see [YAML](https://jekyllrb.com/docs/front-matter/))
{% endraw %}

{% raw %}
The Jekyll variables we will be using are:

`{{ site.url }}`

`{{ site.description }}`

`{{ site.photo_embed }}`

`{{ page.url }}`

`{{ page.title }}`

`{{ page.excerpt }}`

{% endraw %}

<br>

In your `_config.yml` make sure to define "url", "description", and "photo_embed". For example, this is how mine are defined:
```
...
url: "https://anthonyvadala.me" # The base hostname & protocol for the site
...
photo_embed: /images/profile_picture.jpg # Sets picture for Twitter Card/Open Graph
description: Hello, I'm Anthony Vadala! I am an aspiring network specialist and hobbyist web designer.
```

<!--more-->

For each individual post set the front matter block. For this post mine looks like this:
```
---
title: Twitter Cards & Open Graph on Jekyll
layout: post
permalink: /posts/:year/:month/:day/:title
redirect_from: 
    - /2018/10/15/Twitter-Cards-&-Open-Graph-on-Jekyll
    - /posts/2018/10/15/Twitter-Cards-&-Open-Graph-on-Jekyll
excerpt_separator: <!--more-->
---
```

## Twitter Cards Documentation
Looking at the [Twitter Cards documentation](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards) there are several card types available; since I’m not doing any video or linking to apps, I’m looking at using two card types:
- Summary Card
- Summary Card with Large Image

Looking at both types’ properties, the required properties are the same ("card" and "title").

### Twitter Cards Properties
Here is the metadata we will be setting for Twitter:
- `twitter:card` - Used to define the type of card Twitter will display. We will be using "summary".
- `twitter:title` - The post title.

### Twitter Code
{% raw %}
```
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{ page.title }}">
```
{% endraw %}


## Open Graph
According to the [official Open Graph protocol documentation](http://ogp.me/), the basic required properties to use Open Graph are: "title", "type", "image", and "url". We will also be using the optional "description" property.

Unlike Twitter Cards, the Open Graph protocol is supported by many major websites such as: Facebook, Pinterest, Linkedin, Google Plus (RIP) and even Twitter uses it as a [fall back option](https://developer.x.com/en/docs/x-for-websites/cards/guides/getting-started#opengraph)!

### Open Graph Properties
Here is the metadata we will be setting for Open Graph:
- `og:title` - The title that will be displayed.
- `og:type` - Used to define the type of object that will display. We will be using "article".
- `og:image` - The image shown. I am using my profile picture using `site.photo_embed`.
- `og:url` - The link to the post/page.
- `og:description` - The text that will be displayed below the title.

### Open Graph Code
{% raw %}
```
<meta property="og:type" content="article">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:image" content="{{ site.url }}{{ site.photo_embed }}">
```
{% endraw %}


## Putting It All Together
For `og:description`, I wrote a simple if else statement. If the page is a post, it will display an excerpt from the post, striping all HTML, newlines and truncates down it to 160 characters. Else it will display the website description from `_config.yml`

{% raw %}
```
{% if page.excerpt %}
	{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}
{% else %}
	{{ site.description }}
{% endif %}
```
{% endraw %}

### Complete Code
{% raw %}
```
<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{ page.title }}">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:image" content="{{ site.url }}{{ site.photo_embed }}">
```
{% endraw %}

If you want to make sure your meta properties display correctly, you can use a previewer [such as this one](https://dnschecker.org/open-graph-preview-generate-metatags.php)