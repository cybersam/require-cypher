MATCH (keanu:Person), (lily:Person)
WHERE keanu.name = 'Keanu Reeves' AND lily.name = 'Lilly Wachowski'
MERGE p=(keanu)-[:LIKES]->(lily)
RETURN p;
