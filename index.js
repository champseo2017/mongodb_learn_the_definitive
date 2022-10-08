/* 
Dynamic Schemas
  - Grouping documents of the same kind together in the same collection allows for data locality.

  - We begin to impose some structure on our documents when we create indexes. (This is especially true in the case of unique indexes.) These indexes are defined per collection. By putting only documents of a single type into the same collection, we can index our collections more efficiently.

  As you can see, there are sound reasons for creating a schema and for grouping related types of documents together, even though MongoDB does not enforce it.

*/