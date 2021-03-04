# Entity
#tech/paradigm/oop/ddd 

Entities in DDD are domain objects, which have their own unique identity and identification, and represent [[ddd_aggregate_root|root entities]] in their transaction scope. 

In terms of code, entities are fetched by Id, have imutable properties, and should be self validation via a constructor. 