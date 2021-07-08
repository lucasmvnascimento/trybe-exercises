'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
     {
       fullName: 'Leonardo',
       email: 'leo@test.com',
       createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
       updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
     },
     {
       fullName: 'JEduardo',
       email: 'edu@test.com',
       createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
       updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
     }
   ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
