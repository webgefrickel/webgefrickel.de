import { join } from 'path';
import del from 'del';
import config from '../kalong.config';

export default async () =>
  del([
    join(config.root, 'serviceworker.js'),
    join(config.dest, config.styles, '**/*'),
    join(config.dest, config.scripts, '**/*'),
    join(config.dest, config.images, '**/*'),
    join(config.dest, config.fonts, '**/*'),
    join(config.library, '**/*'),
  ]);
