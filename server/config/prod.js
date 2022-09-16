const prod = () => {
  return { mongoURI: process.env.MONGO_URI };
};

export default prod;
