
var unfollowUsernames = ["lhscifi"]

var elements = document.getElementsByClassName("_aacl _aaco _aacw _aad6 _aade");

for(var i = 0; i < elements.length; i++) {
	elements[i].click();
}

const id = setInterval(chooseButton, 100);

function chooseButton() {
   setTimeout(() => { myMethod(); }, 500);
}

function myMethod() {
    try {
    	console.log(document.getElementsByClassName("_aacl _aaco _aacw _aad6 _aade").length);
        var str2 = document.getElementsByClassName("x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x2b8uid x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj");
        var str = str2[str2.length-1].innerHTML;
    	var currUsername = str.substring(10, str.length-1);
    	if(isInArray(currUsername)) {
            var btn = document.getElementsByClassName("_a9-- _a9-_");
            btn[btn.length-1].click();
        } else {
            var btn = document.getElementsByClassName("_a9-- _a9_1");
            console.log(str);
            btn[btn.length-1].click();
        }
    } catch(error) {
        clearInterval(id);
        console.log("done!");
    }
}

function isInArray(name) {
	for(var i = 0; i < unfollowUsernames.length; i++) {
		if(unfollowUsernames[i] == name) return true;
	}
	return false;
}
