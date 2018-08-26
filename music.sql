-- CREATE TABLE album (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     album_year integer,
--     artist_id integer REFERENCES artist (id)
-- );

-- CREATE TABLE artist (
--     id SERIAL NOT NULL PRIMARY KEY,
--     artist_name varchar
-- );

-- CREATE TABLE track (
--     id SERIAL NOT NULL PRIMARY KEY,
--     track_name varchar,
--     album_id integer REFERENCES album (id),
--     track_duraton time
-- );
