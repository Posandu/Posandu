const replace = require("replace");
let r = (Math.random() + 1).toString(36).substring(7);
const reg = "a=10;";
replace({
    regex: reg,
    replacement: `\nconst _${(Math.random() + 1).toString(36).substring(7)} = \`${r}__${new Date().toLocaleString()}\`; `+reg,
    paths: ['README.md'],
    recursive: true,
    silent: true,
});
