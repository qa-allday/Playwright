const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');
const ld = require('lodash');

class FileUtils
{
    async deleteAllFilesInDir(folder= 'output/api-responses') 
        {
            const dir = path.join(process.cwd(), `${folder}`);
            try {
              const files = await fsp.readdir(dir);
              for (const file of files) {
                const filePath = path.join(dir, file);
                const stat = await fsp.lstat(filePath);
                if (stat.isFile()) {
                  await fsp.unlink(filePath);
                }
              }
              console.log(`✅ All files deleted in: ${dir}`);
            } catch (err) {
              console.error('❌ Failed to delete files:', err);
            }
        }
    async saveJsonWithTimestamp(data, name)
        {
            const timestamp = Date.now();
            const dir = path.join(process.cwd(), 'output/api-responses');
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(path.join(dir, `${name}_${timestamp}.json`), JSON.stringify(data, null, 2));
            return path.join(dir, `${name}_${timestamp}.json`)
        }
    
      async compareJsonFiles(fileName, filePath2) 
      {
          const json1 = JSON.parse(fs.readFileSync(`./data/${fileName}`, 'utf-8'));
          const json2 = JSON.parse(fs.readFileSync(filePath2, 'utf-8'));
        
          const areEqual = ld.isEqual(json1, json2);
          if (areEqual) {
            console.log('✅ JSON files are deeply equal.');
          } else {
            console.log('❌ JSON files differ.');
          }
          return areEqual;
      }
}

module.exports = FileUtils;