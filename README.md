# InstagramListDifferentiation

This program can be used to report unfollowers (people who have unfollowed you) since a certain date. This program is also capable of reporting people who you don't follow back and people who don't follow you back on Instagram. This program utilizes IO to compare the contents of two txt files (one representing your followers from the past, the other containing your current followers) and report the list of people who were present in the old list but not present in the new list (AKA ppl who have unfollowed you).

<code>ListComparer.java</code> outputs an ArrayList of elements from a list not present in another list. 
<br>
<code>obtainLists.js</code> details the Instagram API code necessary to obtain the list of followers/following of a user from the javascript console on Instagram.


<h3>Instructions</h3>
<h6>First change the username in <code>obtainLists.js</code> to the username of the account you want to run this program on, and then go to Instagram and paste and enter the content of <code>obtainLists.js</code> into the console and then enter copy(followers). Then open a txt file: (1) write the date on the first line, (2) paste (3) if you want to compare your current followers to previous followers, specify the path to each of the txt files in <code>ListComparer.java</code> and run the program (4) Follow my insta/github for more! :D</h6>
<br></br>
<u>More on the Instagram API: </u><a>https://stackoverflow.com/questions/32407851/instagram-api-how-can-i-retrieve-the-list-of-people-a-user-is-following-on-ins?answertab=scoredesc#tab-top</a>
