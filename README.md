# webgefrickel.de

This repository is a mirror of everything and the kitchen sink that runs the website [https://webgefrickel.de](https://webgefrickel.de)

![webgefrickel.de screenshot](https://webgefrickel.de/assets/img/preview.png?raw=1)

---

## Installation

Clone this repo. Go into the root-folder and run `npm install` to install all dependencies for building the frontend.

The folder */public* is where your webserver's webroot should point to, aka Apache's DocumentRoot or nginx's root directive.

Add a file */public/site/config/license.php* with your kirby-license using `c::set('license', 'yourlicensekey')`

## License

You can purchase your Kirby license at [http://getkirby.com/buy](http://getkirby.com/buy). A Kirby license is valid for a single domain. You can find Kirby's license agreement here: [http://getkirby.com/buy](http://getkirby.com/buy)

Everything non-Kirby (basically all the files **not** in */public/kirby* and */public/panel*) is is published under the [MIT License](LICENSE.md)
