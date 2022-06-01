const db = require('./db');

module.exports = {
  query: (text, params) => {
    return db.query(text, params);
  },

  // ---------------
  // Users
  // ---------------
  //Use only inside of the server
  getUserWithId: (id) => {
    const query = `SELECT id, name, email FROM users WHERE id = $1;`;  
    return db
      .query(query, [id])
  },

  // ---------------
  // Favourites
  // ---------------
  getFavourites: (id) => {
    const query = `SELECT id, product_id, user_id FROM favourites WHERE id = $1;`;  
    return db
      .query(query, [id])
  },  

};