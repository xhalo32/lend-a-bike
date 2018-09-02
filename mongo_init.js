posts = db.getSiblingDB('posts');
posts.createUser({
    user: "memoadmin",
    pwd: "salasana",
    roles: [{
        role: "readWrite",
        db: "posts",
    }],
});
