MATCH (p:Person)
WHERE p.firstName = 'Fred'
WITH p.lastName AS lastName
ORDER BY lastName
RETURN lastName;
