const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, './caption.txt');

const caption = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');   
    const lines  = file.replace(/[:|-]/g, '').split('\n');
    const lines2 = lines.map(line => line.replace(/알 수 없음/g, ''));
    const captions = [];
    lines2.forEach(line => {
            if (line.length > 0) {
                if(!line.includes('000')) {
                    captions.push(line);
                    console.log(line);
                }
            }
        }
    )
    return captions;
}

const writeFilePath = path.resolve(__dirname, './caption-work.txt');

caption(filePath).forEach(line => {
    fs.appendFileSync(writeFilePath, line + '\n');
}
)
console.log('done');
module.exports = caption;