---
layout: default
title: Anthony Vadala - Tools - D&D5E Jump Calculator
permalink: /tools/dnd5e-jump-calculator
---

<!-- CSS Style Sheet/JQuery -->
<link rel="stylesheet" type="text/css" href="/tools/dnd5e/jump-calculator.css" />
<script src="/js/jquery.min.js"></script>

# Dungeons & Dragons 5E - Jump Calculator

**How tall are you?**
<input id="heightFT" value="6" class="DCinputs"><sup>feet</sup>
<input id="heightIN" value="0" class="DCinputs"><sup>inches</sup>

**What is your Strength score?** <input id="STR" value="10" class="DCinputs">
<div id="DEXopt" style="display:none"><span style="font-weight: bold">What is your Dexterity score?</span><input id="DEX" value="10" class="DCinputs"><br><br></div>

**Additional Options**
<ul>
	<li><input type="checkbox" id="tiger_barbarian"><label for="tiger_barbarian"><span style="font-weight: bold">Barbarian</span> - Totem Spirit: Tiger</label></li>
	<li><input type="checkbox" id="remarkable_athlete"><label for="remarkable_athlete"><span style="font-weight: bold">Fighter</span> - Champion: Remarkable Athlete</label></li>
	<li><input type="checkbox" id="step_of_the_wind"><label for="step_of_the_wind"><span style="font-weight: bold">Monk</span> - Step of the Wind</label></li>
	<li><input type="checkbox" id="second_story_work"><label for="second_story_work"><span style="font-weight: bold">Rogue</span> - Thief: Second Story Work</label></li>
	<li><input type="checkbox" id="jump_spell"><label for="jump_spell"><span style="font-weight: bold">Spell</span> - Jump</label></li>
	<li><input type="checkbox" id="athlete_feat"><label for="athlete_feat"><span style="font-weight: bold">Feat</span> - Athlete</label></li>
	<li><input type="checkbox" id="boots_of_springing"><label for="boots_of_springing"><span style="font-weight: bold">Magic Item</span> - Boots of Striding and Springing</label></li>
</ul>


<br>

**With a running start (10 feet of movement)...**

>... your long jump is <span class="value" id="run_horizontal">10</span> feet horizontally.

>... your high jump is <span class="value" id="run_vertical">3</span> feet off the ground.

>... you can reach up and grab something <span class="value" id="run_grab">12</span> feet off the ground.

**Without a running start...**

>... your long jump is <span class="value" id="stand_horizontal">5</span> feet horizontally.

>... your high jump is <span class="value" id="stand_vertical">1.5</span> feet off the ground.

>... you can reach up and grab something <span class="value" id="stand_grab">10.5</span> feet off the ground.

**If there are obstacles in the way...**

>... you might need to make a <span class="value">DC10 Strength (Athletics)</span> check to jump over them.

>... you cannot jump over any obstacles that are taller than <span class="value" id="obstacle">2.5</span>

**If you land in difficult terrain...**

>... you might need to make a <span class="value">DC10 Dexterity (Acrobatics)</span> check or land prone.

**In all circumstances...**

>... you cannot jump farther than your remaining movement. You might need to Dash to cover long distances.

>... your DM might allow you to push beyond your limits with a Strength (Athletics) check.

<br><br>

<center>
<i>This calculator uses the jumping rules found in the 5th Edition Player's Handbook (2014)</i>
</center>

<!-- Import Jump Calculator.js -->
<script src="/tools/dnd5e/jump-calculator.js"></script>