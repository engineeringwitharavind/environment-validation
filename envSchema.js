const valibot = require('valibot');

const envExampleSchema = {
  API_URL: valibot.string().required(),
  API_KEY: valibot.string(),
  DEBUG: valibot.boolean(),
};

module.exports = envExampleSchema;
