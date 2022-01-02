var replace = require("replace");

// use:

let r = (Math.random() + 1).toString(36).substring(7);
replace({
    regex: "<!--aa-->",
    replacement: `![](https://www.gravatar.com/avatar/${r}${r}${r}?s=28)<!--aa-->`,
    paths: ['README.md'],
    recursive: true,
    silent: true,
});
