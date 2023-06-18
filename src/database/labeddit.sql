-- Active: 1686419857099@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES ("u001", "Thalita", "thalital@email.com", "$2a$12$VmnwBp/BFacrAXWVWJeETOjdV44iYQwaIlERHaEPD0tQOue8xEd9i"),
("u002", "Guilherme", "guilherme@email.com", "$2a$12$PbesQdU.igRpItbzduygL.2kpKxT6Hbej2Shvsf306MeyNSz8ujzO");

SELECT * FROM users;

DROP TABLE users;

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    content TEXT NOT NULL,
    comments INTEGER DEFAULT(0) NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL,
    dislikes INTEGER DEFAULT(0) NOT NULL,
    creator_id TEXT UNIQUE NOT NULL,
    creator_name TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (creator_name) REFERENCES users (name)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO posts (id, content, creator_id, creator_name)
VALUES ('p001', "Texto para o Labeddit", "u001", "Thalita");

SELECT * FROM posts;
DROP TABLE posts;

CREATE TABLE likes_dislikes_posts (
    like INTEGER NOT NULL,
    post_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO likes_dislikes_posts
VALUES ("u002", "p001", 1);

SELECT * FROM likes_dislikes_posts;

DROP TABLE likes_dislikes_posts;

CREATE TABLE comments (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL,
    dislikes INTEGER DEFAULT(0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO comments (id, user_id, post_id, content)
VALUES ("c001", "u002", "p001", "Amei o post!");

SELECT * FROM comments;

DROP TABLE comments;

CREATE TABLE likes_dislikes_comments (
    like INTEGER NOT NULL,
    comment_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    FOREIGN KEY (comment_id) REFERENCES comments (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE

)

SELECT * FROM likes_dislikes_comments;

DROP TABLE likes_dislikes_comments;