---
layout: profile
title: Anthony Vadala - About
permalink: /
---

<!-- Menu Radius Override For About Page -->
<style>
	ul.topnav {
		border-bottom-right-radius: 0px !important;
		border-bottom-left-radius: 0px !important;
}
</style>

<!-- Profile Header -->
<div id="background">
	<div id="circular"></div>
</div>

<!-- Short Intro -->
<div id="title">Hello, I'm Anthony Vadala!</div>
<div id="sub-title">
	<span class="tag">Router Resetter</span>
	<span class="tag">VHS Dubber</span>
	<span class="tag">Video Game Enjoyer</span>
	<span class="tag">Tabletop GM</span>
	<span class="tag">Tea Drinker</span>
	<span class="tag">They/Them</span>
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