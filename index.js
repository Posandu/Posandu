const fs = require('fs');

fs.writeFileSync('_last_update.txt', `
    Last updated on ${new Date().toLocaleString()}
`)