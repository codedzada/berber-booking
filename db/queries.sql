SELECT id, name, specialty, price, status
FROM barbers
WHERE status = 'open'
ORDER BY price ASC;

SELECT id, name, specialty, experience_years, price
FROM barbers
WHERE name ILIKE '%el%'
ORDER BY experience_years DESC;

SELECT id, name, specialty, experience_years, price, status
FROM barbers
WHERE experience_years > 4
ORDER BY id ASC;

INSERT INTO barbers (name, specialty, experience_years, price, status)
VALUES ('Nurlan Huseynov', 'fade', 5, 16.00, 'open')
RETURNING *;

UPDATE barbers
SET price = 18.00, status = 'booked'
WHERE id = 1
RETURNING *;

DELETE FROM barbers
WHERE id = 6
RETURNING *;