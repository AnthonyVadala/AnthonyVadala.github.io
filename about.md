---
layout: profile
title: Anthony Vadala - About
permalink: /
---

<!-- Profile Header -->
<div id="background">
	<div id="circular"></div>
</div>

<!-- Short Intro -->
<div id="title">Hello, I'm Anthony Vadala!</div>
<div id="sub-title">
	<tag>Router Resetter</tag>
	<tag>VHS Dubber</tag>
	<tag>Video Game Enjoyer</tag>
	<tag>Tabletop GM</tag>
	<tag>Tea Drinker</tag>
	<tag>They/Them</tag>
</div>

<!-- Social Media Links -->
<ul class="buttonList">
	{% if site.bluesky_username %}
	<li class="button bluesky">
		<a href="https://bsky.app/profile/{{ site.bluesky_username }}" rel="noopener" accesskey="b" data-instant>
			<span class="fab fa-bluesky"></span> Bluesky</a>
	</li>
	{% endif %} {% if site.linkedin_username %}
	<li class="button linkedin">
		<a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" rel="noopener" accesskey="l" data-instant>
			<span class="fab fa-linkedin-in"></span> LinkedIn</a>
	</li>
	{% endif %}{% if site.github_username %}
	<li class="button github ">
		<a href="https://github.com/{{ site.github_username }}" rel="noopener" accesskey="g" data-instant>
			<span class="fab fa-github"></span> GitHub</a>
	</li>
	{% endif %} {% if site.gitlab_username %}
	<li class="button gitlab ">
		<a href="https://gitlab.com/{{ site.gitlab_username }}" rel="noopener" accesskey="i" data-instant>
			<span class="fab fa-gitlab"></span> GitLab</a>
	</li>
	{% endif %} {% if site.keybase_username %}
	<li class="button keybase">
		<a href="https://keybase.io/{{ site.keybase_username }}" rel="noopener" accesskey="k">
			<span class="fab fa-keybase"></span> Keybase</a>
	</li>
	{% endif %}
</ul>