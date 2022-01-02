var fs = require('fs')
const https = require('https')
const file = 'README.md';
const options = {
    hostname: 'picsum.photos',
    path: '/200/300',
    method: 'GET'
}

const req = https.request(options, res => {
    res.on('data', d => {

        fs.readFile(file, function (err, data) {
            if (err) throw err;
            fs.writeFile(file, d, function (err) {
                err || console.log('Data replaced \n', data);
            });
        });
    })
})

req.on('error', error => {
    console.error(error)
})
