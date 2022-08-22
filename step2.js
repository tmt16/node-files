const fs = require("fs")
// const argv = process.argv;
const process = require('process')
const axios = require('axios');

async function webCat(url) {
    try {
        let res = await axios.get(url)
        console.log(res.data.slice(0, 80), '...');
    } catch (err) {
        console.log(`Error fetching ${url}: ${err}`)
        process.exit(1)
    }
}

let path = process.argv[2];

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
    if(err) {
        console.log(`Error fetching ${path}: ${err}`)
        process.kill(1)
    } else {
        console.log(data)
    }
});
}

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}

