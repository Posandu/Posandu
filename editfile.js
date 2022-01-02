const Jimp = require('jimp');


let imageData = [
  [ 0xFF0000FF, 0xFF0000FF, 0xFF0000FF ],
  [ 0xFF0000FF, 0x00FF00FF, 0xFF0000FF ],
  [ 0xFF0000FF, 0xFF0000FF, 0x0000FFFF ]
];


let image = new Jimp(3, 3, function (err, image) {
  if (err) throw err;

  imageData.forEach((row, y) => {
    row.forEach((color, x) => {
      image.setPixelColor(color, x, y);
    });
  });

  image.write('img.png', (err) => {
    if (err) throw err;
  });
});
