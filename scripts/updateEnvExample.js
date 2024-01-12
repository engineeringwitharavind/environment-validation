const fs = require('fs');
const path = require('path');
const envSchema = require('../envSchema');

// Create .env.example file based on the updated schema
const envExampleContent = Object.keys(envSchema)
  .map((key) => `${key}=\n`)
  .join('');

fs.writeFileSync(path.resolve(__dirname, '../.env.example'), envExampleContent);

console.log('.env.example file updated successfully.');
