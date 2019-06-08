const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  //uncomment for local storage
  //mongoUri: process.env.MONGODB_URI ||
  //  process.env.MONGO_HOST ||
  //  'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //  (process.env.MONGO_PORT || '27017') +
  //  '/mernproject',
  // uncomment for remote storage
  mongoURI: "mongodb://<dbuser>:<dbpassword>@ds135217.mlab.com:35217/tech-hub",
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key'
}

export default config
