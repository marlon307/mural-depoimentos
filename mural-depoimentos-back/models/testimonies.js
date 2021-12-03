const mongoConnection = require('./connection');

const dbConnection = async () => {
  const db = await mongoConnection.getConnection().then((conn) => conn.collection('depoimentos'));

  return db;
};

const createTestimony = async (user, text) => {
  const db = await dbConnection();
  const newTestimony = await db.insertOne({ user, text });
  return newTestimony;
};

const getAllTestimonies = async () => {
  const db = await dbConnection();
  const testimonies = await db.find().toArray();

  return testimonies;
};

module.exports = {
  createTestimony,
  getAllTestimonies,
};
