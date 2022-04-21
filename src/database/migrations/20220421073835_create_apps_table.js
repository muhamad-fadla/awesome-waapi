const uuid = require('uuid')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('apps', $table => {
        $table.uuid('id').primary().defaultTo(uuid.v4());
        $table.string('name').notNullable();
        $table.string('engine_id').notNullable();
        $table.string('status').notNullable().defaultTo('waiting');
        $table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('apps');
};
