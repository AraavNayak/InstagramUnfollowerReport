const username = "USERNAME_HERE";

let followers = [];
let followings = [];
let dontFollowMeBack = [];
let iDontFollowBack = [];

followers = [];
followings = [];
dontFollowMeBack = [];
iDontFollowBack = [];

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
          followers = followers.concat(
            res.data.user.edge_followed_by.edges.map(({ node }) => {
              return node.username;
            })
          );
        });
    }
    console.log({ followers });
    after = null;
    has_next = true;

    while (has_next) {
      await fetch(
        `https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=` +
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
          has_next = res.data.user.edge_follow.page_info.has_next_page;
          after = res.data.user.edge_follow.page_info.end_cursor;
          followings = followings.concat(
            res.data.user.edge_follow.edges.map(({ node }) => {
              return node.username;
            })
          );
        });
    }
    console.log({ followings });

    dontFollowMeBack = followings.filter((following) => {
      return !followers.find(
        (follower) => follower === following
      );
    });
    console.log({ dontFollowMeBack });

    iDontFollowBack = followers.filter((follower) => {
      return !followings.find(
        (following) => following === follower
      );
    });
    console.log({ iDontFollowBack });
    console.log(
      `Done! Enter 'copy(followers)' or 'copy(followings)' or 'copy(dontFollowBack)' or 'copy(iDontFollowBack)' in the console and paste it into a txt file to take a look at it'`
    );
  } catch (err) {
    console.log({ err });
  }
})();
