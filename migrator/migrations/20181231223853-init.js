'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    begin;
      CREATE TABLE stops (
        id serial PRIMARY KEY,
        "stop_id" text,
        "code" text,
        "name" text,
        "description" text,
        "lat" text,
        "lon" text,
        "zone_id" text,
        "url" text,
        "location_type" text,
        "parent_station" text,
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      CREATE TABLE stop_schedule_items (
        id serial PRIMARY KEY,
        route_id text,
        delay text,
        arrivalTime timestamp,
        departureTime timestamp,
        stop_schedule_id numeric,
        direction text,
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
      CREATE TABLE stop_schedules (
        id serial PRIMARY KEY,
        "stop_id" text,
        created_at timestamp not null default CURRENT_TIMESTAMP
      );
    commit;
   `);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    begin;
      drop table if exists stops;
      drop table if exists stop_schedule_items;
      drop table if exists stop_schedules;
    commit;
   `);
  }
};
