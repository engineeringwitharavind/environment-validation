const fs = require('fs');
const path = require('path');

// Create .env.example file based on the schema
const envExampleContent =
  '# Modify the values based on your environment\n\nKEY1=\nKEY2=\n';

fs.writeFileSync(path.resolve(__dirname, '../.env.example'), envExampleContent);

console.log('.env.example file created successfully.');
