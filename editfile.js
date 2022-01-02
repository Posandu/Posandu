var replace = require("replace");

// use:

let r = (Math.random() + 1).toString(36).substring(7);
replace({
    regex: "<!--START_SECTION:waka-->",
    replacement: "<img src='https://robohash.org/"+r+".png' width='200'> <!--START_SECTION:waka-->",
    paths: ['README.md'],
    recursive: true,
    silent: true,
});
