/*  env can also be included as a 2nd param 
    alongside config */
const { alias, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json'); // or jsconfig.paths.json

module.exports = alias(aliasMap);
