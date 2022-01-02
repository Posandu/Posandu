var fs = require('fs')
const someFile = "README.md"

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace("<!----!----->", '<!----!-----> <img src="https://picsum.photos/200/300">');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
