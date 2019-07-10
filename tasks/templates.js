import { basename, join, dirname } from 'path';
import { sync } from 'glob';
import { readFile, writeFile, makeDir } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const patternFolders = sync(join(config.src, config.patterns, '*'));
  const templateFolder = patternFolders.filter(folder =>
    folder.includes(config.templates.replace(/^\/|\/$/g, ''))
  );
  const files = sync(join(templateFolder[0], '**/*.html'));

  files.forEach(async file => {
    // regex for replacing extends, for use in kirby/twig
    const contents = await readFile(file);
    const extendsRegex = /{%\s?extends\s?'(.+)'\s?%}/g;
    const lines = contents.split('\n');
    let newContents = '';

    lines.forEach(line => {
      const match = extendsRegex.exec(line);
      if (match === null) {
        newContents += `${line}\n`;
      } else {
        // replace html with twig for usage in kirby
        const pattern = match[1].slice(1);
        const newLine = line.replace(`@${pattern}`, `@pattern/${pattern}.html`);
        newContents += `${newLine}\n`;
      }
    });

    const outFile = join(
      config.library,
      '../',
      config.templates,
      basename(file).replace('.html', '.twig')
    );

    try {
      await makeDir(dirname(outFile));
      await writeFile(outFile, newContents);
    } catch (error) {
      warn(error);
    }
  });
};
