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

<br><br><br>
<br><br><br>


<center>
<i>Uses the public API provided by <a href="https://www.ipify.org/" rel="noopener" target="_blank">ipify</a></i>
</center>
