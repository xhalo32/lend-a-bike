CREATE DATABASE memoserver;

CREATE TABLE memoserver.memos(
    uid         int             NOT NULL AUTO_INCREMENT,
    postid      int             ,
    created     datetime        DEFAULT NOW(),
    modified    datetime        DEFAULT NOW(),
    text        varchar(1023)   ,
    owner       varchar(255)    NOT NULL,
    PRIMARY KEY (uid)
);

CREATE TABLE memoserver.tokens(
    user_id     int             NOT NULL,
    token       varchar(255)    NOT NULL,
    UNIQUE KEY (user_id)
);
