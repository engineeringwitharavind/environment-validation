const fs = require('fs');
const path = require('path');
const valibot = require('valibot');

// Define the initial schema with dummy values
const initialSchema = {
  API_URL: valibot.string().required(),
  API_KEY: valibot.string(),
  DEBUG: valibot.boolean(),
};

// Create envSchema.js based on the initial schema
const envSchemaContent = `const valibot = require('valibot');\n\nmodule.exports = ${JSON.stringify(
  initialSchema,
  null,
  2
)};\n`;

fs.writeFileSync(path.resolve(__dirname, '../envSchema.js'), envSchemaContent);

console.log(
  'envSchema.js file created. Modify the values based on your environment.'
);
