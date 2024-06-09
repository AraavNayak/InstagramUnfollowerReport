const username = "YOUR_USERNAME";
const lookFor = "ACCOUNT_IN_QUESTION";
var found = false;

(async () => {
  try {
    console.log(`Process started! Give it a couple seconds`);
    const userQueryRes = await fetch(
      `https://www.instagram.com/web/search/topsearch/?query=${username}`
    );
    const userQueryJson = await userQueryRes.json();
    const userId = userQueryJson.users[0].user.pk;
    let after = null;
    let has_next = true;

    while (has_next) {
      await fetch(
        `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=` +
          encodeURIComponent(
            JSON.stringify({
              id: userId,
              include_reel: true,
              fetch_mutual: true,
              first: 50,
              after: after,
            })
          )
      )
        .then((res) => res.json())
        .then((res) => {
          has_next = res.data.user.edge_followed_by.page_info.has_next_page;
          after = res.data.user.edge_followed_by.page_info.end_cursor;
            res.data.user.edge_followed_by.edges.map(({ node }) => {
            	if(node.username.localeCompare(lookFor) == 0) {
            		console.log("YES");
            		found = true;
            	}
              	return node.username;
            })
        });
    }
    
    if(found==false) console.log("No");
  } catch (err) {
    console.log({ err });
  }
})();