var replace = require("replace");

// use:

let r = (Math.random() + 1).toString(36).substring(7);
replace({
    regex: "//",
    replacement: `\nconst _${(Math.random() + 1).toString(36).substring(7)} = \`${r}__${new Date().toLocaleString()}\`;//`,
    paths: ['README.md'],
    recursive: true,
    silent: true,
});
