module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Delivery App Admin',
        role: 'administrator',
        email: 'adm@deliveryapp.com',
        password: '200ceb26807d6bf99fd6f4f0d1ca54d4'
      },
      {
        name: 'Fulana Pereira',
        role: 'seller',
        email: 'fulana@deliveryapp.com',
        password: '0407e8c8285ab85509ac2884025dcf42', 
      },
      {
        name: 'Cliente Zé Birita',
        role: 'customer',
        email: 'zebirita@email.com',
        password: '91ec1f9324753048c0096d036a694f86', 
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
