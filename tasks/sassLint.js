import { join } from 'path';
import sassLint from 'sass-lint';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const lintPaths = [
    join(config.src, config.styles, '**/*.scss'),
    join(config.src, config.patterns, '**/*.scss'),
  ];

  lintPaths.forEach(files => {
    const report = sassLint.lintFiles(files, {}, '.sass-lint.yml');

    if (report.length) {
      report.forEach(file => {
        if (file.errorCount || file.warningCount) {
          warn('sass-lint found errors in the following files:');
          warn('==============================================');

          file.messages.forEach(m => {
            warn(`${file.filePath} on line ${m.line}, column ${m.column}:`);
            warn(`${m.ruleId}: ${m.message}\n`);
          });
        }
      });
    }
  });
};
