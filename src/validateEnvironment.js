const dotenv = require('dotenv');
const valibot = require('valibot');
const envSchema = require('../envSchema');

// Load .env.example for validation
const exampleEnv = dotenv.config({ path: '.env.example' });

// Validate .env.example against the schema
valibot.validate(
  exampleEnv.parsed,
  envSchema,
  { abortEarly: false },
  (error, result) => {
    if (error) {
      console.error('Validation Error in .env.example:', error.message);
      process.exit(1);
    }

    console.log('.env.example file validation successful!');
  }
);

// Load .env for validation
const currentEnv = dotenv.config();

// Validate .env against the schema
valibot.validate(
  currentEnv.parsed,
  envSchema,
  { abortEarly: false },
  (error, result) => {
    if (error) {
      console.error('Validation Error in .env:', error.message);
      process.exit(1);
    }

    console.log('.env file validation successful!');

    // Check for missing variables in .env compared to .env.example
    const missingVariables = Object.keys(exampleEnv.parsed).filter(
      (key) => currentEnv.parsed[key] === undefined
    );

    if (missingVariables.length > 0) {
      console.error(
        'Missing environment variables in .env:',
        missingVariables.join(', ')
      );
      process.exit(1);
    }

    console.log('All environment variables are present!');
  }
);
