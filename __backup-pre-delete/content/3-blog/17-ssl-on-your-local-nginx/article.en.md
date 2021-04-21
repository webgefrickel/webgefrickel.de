Title: SSL on your local nginx

----

Date: 2016-04-25

----

Intro: Last week I've been to the IndieWebCamp Nürnberg, and it was amazing. I experimented with ServiceWorkers and therefore I first tried to activate SSL in my local development environment, because SSL is a key requirement for ServiceWorkers. Here is how I did it.

----

Text: 

A secure encrypted connection is a key component for ServiceWorkers, or as [Jeremy Keith](https://adactio.com) phrased it during the IndieWebCamp: you have to have encryption, because you basically are performing a man-in-the-middle-attack on yourself. ServiceWorker will run on localhost, but since I have all my sites and playgrounds locally running under the infamous \*.local.dev-domain, I thought it would be nice to give my local development environment an SSL-treatment.

[letsencrypt](https://letsencrypt.org) is (still) not working under OS X, so I decided to create my own self-signed certificate. Since I am the only person using this certificate only on my computer anyway, it is fine to not buy one anywhere or try to compile letsencrypt on you Mac.

First things first — if not already installed — install a current version of openssl and nginx, I recommend [homebrew](http://brew.sh/). Open up a terminal and run:

```sh
brew install openssl
brew install nginx --devel --with-http2
```

(The --devel and --with-http2 options will install the most current nginx version, with support for HTTP2 enabled, if you don't want HTTP2 support, just drop those flags). I won't get into the details of setting up your nginx on OS X, that's for you to figure out…

The next step is to create the certificate for all domains you want to use it for, in my case it's \*.local.dev, since I am creating a virtual host for every project I am working on under this domain (for example: test.local.dev or new-wordpress.local.dev). The config for nginx then should be in /usr/local/etc/nginx:

```sh
cd /usr/local/etc/nginx
mkdir ssl-config
cd ssl-config
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 3650
```

Let me explain this command a bit: first we change into your nginx config directory and create a new folder ssl-config. This is where the keys and certificate will be created. We then fire up openssl, telling it that it should create a standard certificate signing request `req -x509`, with an encryption strength of 4096 bit. We tell openssl where to put the files (`-keyout` and `-out`) and finally that this certificate should be valid for 10 years, because why the fuck not.

During the process openssl will ask you some questions:

```
Generating a 4096 bit RSA private key
............................................................................++
....................++
writing new private key to 'key.pem'
Enter PEM pass phrase:
Verifying - Enter PEM pass phrase:
--
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
--
Country Name (2 letter code) [AU]:DE
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:webgefrickel
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:*.local.dev
Email Address []:
```

First you have to enter a pass phrase, just enter something simple you can remember for 5 minutes, we get to that later. You can then basically ignore all other options except for the one where it asks for the 'Common Name' / FQDN. This is where you have to provide the domain name(s) for which you want to create the certificate for, in my case \*.local.dev.

This gives you two files: key.pem and cert.pem, and theoretically you are done now. Include those two files in your SSL-config and you are ready to go. But I ran into the issue that from now on, every time I re/started nginx, I had to enter the password from above. Let's circumvent this behaviour by running the following command (in the same folder):

```sh
openssl rsa -in key.pem -out key-nopass.pem
```

You have to enter your password from above once, and then you get the key-nopass.pem file for which you won't need a password anymore. 

One last thing for added bonus-paranoia: create your own Diffie-Hellman parameters for DHE ciphersuites, I recommend 2048 bits, because 4096 will take hours (literally):

```sh
openssl dhparam 2048 > dhparam.pem
```

(This can take to about ~5 minutes, go get yourself some coffee).

Now you have everything you need, so let's configure nginx accordingly. I highly recommend checking out the [Mozilla SSL Configuration Generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/). Click 'nginx' and 'modern' (or intermediate, if you still have to test IE10 and lower on your local machine) for a starting point. In the end I ended up with something like the following config:

```nginx
server {
  # listen on both port 80 and the default ssl port — that's OK locally
  listen [::]:443 ssl http2; # ipv6
  listen [::]:80; # ipv6
  listen 443 ssl http2;
  listen 80;
  # you servername and the path to your web-root
  server_name test.local.dev;
  root /path/to/your/site/public;

  # those are the files we've just created with openssl
  ssl_certificate /usr/local/etc/nginx/ssl-config/cert.pem;
  ssl_certificate_key /usr/local/etc/nginx/ssl-config/key-nopass.pem;
  ssl_dhparam /usr/local/etc/nginx/ssl-config/dhparam.pem;

  # support only modern browsers with TLS 1.2+
  ssl_protocols TLSv1.2;
  ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256';
  ssl_prefer_server_ciphers on;

  # local values with looong cache times etc. should not be used for production
  ssl_session_timeout 30d;
  ssl_session_cache shared:SSL:50m;
  ssl_session_tickets off;
  keepalive_timeout 300; # up from 75s default, reduce handshakes
  add_header Strict-Transport-Security max-age=31536000; # HSTS for up to one year

  # additional config, php, rewrites etc.
  ...
}
```

Test your configuration with `nginx -t` and restart nginx (if you run it on port 80, you have to use sudo) and you should be all set up. Open a browser and point it to your local website (test.local.dev in this example) and accept the 'insecure certificate', it's the one we just created. You only have to do this once since we've created it for multiple domains (the wildcard `*`) and it is valid for ~10 years.

And that's it! For all other local development domains, just use the same `ssl_certificate`, `ssl_certificate_key` and `ssl_dhparam` and you never have to worry about this again. In fact I have made the config from above a partial (without the `server_name` and `root`) so I can just do the following:

```nginx
server {
  server_name new-wordpress.local.dev;
  root /path-to-the/new-wordpress/public;

  # Include SSL default local config
  include /usr/local/etc/nginx/conf-extra/ssl.conf;

  ...
}
```

Setting up a new vhost with SSL is then just a matter of seconds. Add yournewhost.local.dev to /etc/hosts, create a new nginx-config file, include the SSL-config, restart nginx and you are done (this screams shell-script, doesn't it?).

In the end, I still could not get the ServiceWorker running on my local machine, but hey, at least everything is running on SSL locally now. https all the things!

----

Tags: nginx

----

Gallery: 0