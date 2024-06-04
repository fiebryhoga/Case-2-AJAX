CREATE DATABASE chat_app;
USE chat_app;

CREATE TABLE users (
id_users INT (11) PRIMARY KEY NOT NULL,
username VARCHAR (100),
profile_picture VARCHAR (100)
);
DESC users;

CREATE TABLE message (
  id_message INT(11) PRIMARY KEY NOT NULL,  
  id_users INT(11),
  message VARCHAR(100),
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users (id_users)
);
DESC message;