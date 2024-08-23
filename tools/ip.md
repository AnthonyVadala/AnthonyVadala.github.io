---
layout: page
title: What Is My IP Address
permalink: /tools/ip
---

<br><br><br>

<script type="application/javascript">
	function getIP(json) {
		document.write("<center>Current public IP address is: ", json.ip, "</center>");
	}
</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>

<center>
<br><br><br>
<br><br><br>
Temporarily disabling Ad-blockers and browser features such as Firefox's Enhanced Tracking Protection may be required in order to display your public IP Address.
<br><br>
<i>Uses the public API provided by <a href="https://www.ipify.org/" rel="noopener" target="_blank">ipify</a></i>
</center>
