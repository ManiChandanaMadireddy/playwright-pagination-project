// Load environment variables from .env
require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL,
  headless: process.env.HEADLESS === 'true'
};


