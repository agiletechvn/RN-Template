const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/components/ImageIcon/resources')
    .filter((file) => {
      return file.endsWith('.png');
    })
    .map((file) => {
      return file.replace('.png', '');
    });
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      return `${name.replace(/-/g, '_')}: require('./resources/${name}.png')`;
    })
    .join(',\n  ');
  const string = `const resources = {
  ${properties},
};\n
export default resources;
`;
  fs.writeFileSync('src/components/ImageIcon/resources.js', string, 'utf8');
};

generate();
