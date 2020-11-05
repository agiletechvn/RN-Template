const fs = require('fs');
const uniq = require('lodash/uniq');

const imageFileNames = () => {
  const array = uniq(
    fs
      .readdirSync('src/components/ImageIcon/resources')
      .filter((file) => {
        return file.endsWith('.png');
      })
      .map((file) => {
        return file.replace('.png', '').replace('@2x', '').replace('@3x', '');
      }),
  );
  return array;
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

  const nameSuggestion = `import { ImageProps } from 'react-native';

  interface ImageIconProps extends ImageProps {
    square: number;
    circle: number;
    name: ${imageFileNames()
      // eslint-disable-next-line no-useless-escape
      .map((e) => `\'${e}\'`)
      .join(' | ')};
  }
  
  export default function ImageIcon(props: ImageIconProps): {};
  `;

  fs.writeFileSync('src/components/ImageIcon/resources.js', string, 'utf8');
  fs.writeFileSync(
    'src/components/ImageIcon/index.d.ts',
    nameSuggestion,
    'utf8',
  );
};

generate();
