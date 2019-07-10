import { join } from 'path';
import { CLIEngine } from 'eslint';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const cli = new CLIEngine({ useEslintrc: true });
  const taskPathJs = join('./tasks/**/*.js');
  const srcPathJs = join(config.src, config.scripts, '**/*.js');
  const patternPathJs = join(config.src, config.patterns, '**/*.js');
  const report = cli.executeOnFiles([taskPathJs, srcPathJs, patternPathJs]);

  if (report.results && report.results.length) {
    report.results.forEach(file => {
      if (file.errorCount || file.warningCount) {
        warn('eslint found errors in the following files:');
        warn('==============================================');

        file.messages.forEach(m => {
          warn(`${file.filePath} on line ${m.line}, column ${m.column}:`);
          warn(`${m.ruleId}: ${m.message}\n`);
        });
      }
    });
  }
};
