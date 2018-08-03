db = db.getSiblingDB('posts');
db.createUser({ user: "miika", pwd: "salasana", roles: [{
	role: "readWrite", db: "posts"
}] });
