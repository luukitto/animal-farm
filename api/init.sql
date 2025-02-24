-- Create user and database
CREATE ROLE pig LOGIN PASSWORD 'bidzina' SUPERUSER;
CREATE DATABASE animal_farm;
GRANT ALL PRIVILEGES ON DATABASE animal_farm TO pig;
