const fs = require("fs")
const argv = process.argv;

function cat(path) {
    fs.readFile('one.txt', 'utf8', (err, data) => {
    if(err) {
        console.log("Error", err)
        process.kill(1)
    } else {
        console.log(data)
   
    }
});
}
cat(process.argv[2])