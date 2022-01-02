var fs = require('fs');
var imgGen = require('js-image-generator');
 
// Generate one image
imgGen.generateImage(800, 600, 80, function(err, image) {
    fs.writeFileSync('img.jpg', image.data);
});
 
