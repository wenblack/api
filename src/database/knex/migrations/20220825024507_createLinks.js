exports.up = knex => knex.schema.createTable("links", table => {
  //auto increment field
  table.increments("id")
  //verifying blank name 
  table.text("url").notNullable()
  //Delete tag with her note
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE")
  table.timestamp("created_at").default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("links");
