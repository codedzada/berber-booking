DROP TABLE IF EXISTS barbers;

CREATE TABLE barbers (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    specialty text NOT NULL,
    experience_years integer NOT NULL CHECK (experience_years >= 0),
    price numeric(18,2) NOT NULL CHECK (price >= 0),
    status text NOT NULL DEFAULT 'open'
);