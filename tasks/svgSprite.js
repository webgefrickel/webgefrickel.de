import { join, resolve, dirname } from 'path';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import SvgSprite from 'svg-sprite';
import { writeFile, makeDir } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async (opts = {}) => {
  const options = {
    dest: opts.output || join(config.src, config.images),
    mode: {
      symbol: {
        dest: './',
        sprite: opts.output || join('../', config.images, 'sprite.svg'),
      },
    },
    shape: {
      meta: opts.sprite || join(config.src, config.icons, 'sprite.yml'),
      id: {
        generator: 'icon--%s',
      },
    },
  };

  const sprite = new SvgSprite(options);
  const icons = sync(opts.input || join(config.src, config.icons, '*.svg'));

  icons.forEach(icon => {
    sprite.add(
      resolve(icon),
      icon.replace(/^.*[\\/]/, ''), // filename only
      readFileSync(icon, { encoding: 'utf-8' })
    );
  });

  try {
    sprite.compile(async (error, result) => {
      await makeDir(dirname(options.dest));
      await writeFile(
        opts.output || join(config.src, config.images, 'sprite.svg'),
        result.symbol.sprite.contents
      );
    });
  } catch (error) {
    warn(error);
  }
};
