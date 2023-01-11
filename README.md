# InstagramListDifferentiation

This program can be used to report unfollowers (people who have unfollowed you) since a certain date. This program utilizes IO to compare the contents of two txt files (one representing your followers from the past, the other containing your current followers) and report the list of people who were present in the old list but not present in the new list (AKA ppl who have unfollowed you).

<code>Main.java</code> outputs an ArrayList of elements from a list not present in another list. 
<br>
<code>obtainLists.js</code> details the Instagram API calls necessary to obtain the list of followers/following.


<h3>Instructions</h3>
<h6>Go to your Instagram profile, paste the content of <code>obtainLists.js</code> into the console and then enter copy(followers). Then open a txt file: (1) write the date on the first line, (2) paste (3) if you want to compare your current followers to previous followers, specify the path to each of the files in <code>Main.java</code> and run the program :D</h6>

