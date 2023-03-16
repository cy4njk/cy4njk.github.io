



if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="/css/versions4.css">');
var d = new Date();
var currHour = d.getHours();
    if (currHour >= 6 && currHour <= 19) {
        document.write('<link rel="stylesheet" type="text/css" href="styleday.css">');
    } else {
        document.write('<link rel="stylesheet" type="text/css" href="stylenight.css">');
    }