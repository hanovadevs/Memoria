const clerk = require('@clerk/nextjs');
console.log(Object.keys(clerk).filter(k => k.includes('Signed')));
