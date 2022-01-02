var fs = require('fs')
const https = require('https')
const file = 'README.md';
const options = {
    hostname: 'picsum.photos',
    path: '/200/300',
    port: 80,
    method: 'GET'
}

const req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        const data = chunk;
        fs.readFile(file, function (err, data) {
            if (err) throw err;
            fs.writeFile(file, data, function (err) {
                err || console.log('Data replaced \n', data);
            });
        });
    });
});


req.on('error', error => {
    console.error(error)
})
