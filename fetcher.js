let uInput = process.argv.splice(2);
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
let rl = readline.createInterface({ input, output });

request(uInput[0], (error, response, body) => {
  let rd = readline.createInterface({
    input: fs.createReadStream(uInput[1]),
    output: writeFile(body),
  });
});

const writeFile = (body) => {
  fs.writeFile(uInput[1], body, (err) => {
    if (err) {
      return console.log('error');
    } else {
      const stats = fs.statSync(uInput[1]);
      const fileSizeInBytes = stats.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} to ${uInput[1]}`);
    }
    return;
  });
};
