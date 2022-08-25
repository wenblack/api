exports.up = knex => knex.schema.createTable("notes", table => {
  //auto increment field
  table.increments("id")
  table.text("title")
  table.text("description")
  //reference
  table.integer("user_id").references("id").inTable("users")


  //time stamp field
  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("notes");
