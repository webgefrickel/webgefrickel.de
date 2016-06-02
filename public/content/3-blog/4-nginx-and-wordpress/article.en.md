Title: Nginx and WordPress

----

Date: 2015-06-30

----

Intro: I've ordered a new virtual private server, because the old one was a bit to slow for »that one project«. Here is how I configured it to run WordPress with nginx and fastcgi_cache.

----

Text: 

I've had an old CentOS Server for a very long time, 2 gigs of RAM, stable and with not much running on it. Except for this one project for an audioplay-festival, that once a year gets a lot of traffic. So I decided to get a new server and give nginx a try. Coming from Apache with almost no experience on nginx-configuration, I thought this would take some time. It didn't :)

The [nginx-documentation](http://nginx.org/en/docs/beginners_guide.html) is well written, easy to understand and I had a running webserver with a current PHP and MariaDB in about 2 hours. Sure, there was a lot of copy & paste and `nginx -t && service nginx restart`, but I finally understood what I was doing. And I've never really had that feeling with Apache…

For the basic nginx-config I took parts from the awesome and well documented [HTML5-Boilerplate server-configs for nginx](https://github.com/h5bp/server-configs-nginx). I would recommend to read through every file and the documentation, this really helped me to grok nginx in no time. After some fiddling around with php5-fpm and various parameters, I finally got that thing running.

To test the new setup, I installed [siege](https://www.joedog.org/siege-home/) on my local machine and threw some requests at my new server, 10 concurrent users, with 100 repeats to simulate some mild traffic. First, those are the statistics from the old server:

Old server (Apache, PHP 5.3, 2GB of RAM), 
`siege -c 10 -r 100 -b http://hoerspielsommer.de/`
```md
Transactions:                    983 hits
Availability:                  98.30 %
Elapsed time:                 501.68 secs
Data transferred:               5.11 MB
Response time:                  4.08 secs
Transaction rate:               1.96 trans/sec
Throughput:                     0.01 MB/sec
Concurrency:                    7.99
Successful transactions:         983
Failed transactions:              17
Longest transaction:           28.76
Shortest transaction:           0.54
```

So that's roughly 2 transactions per second and some failed requests. Ha, that's why I wanted a new box in the first place. Then I hit my new server (nginx, PHP 5.6, SSD, 4GB of RAM), 
`siege -c 10 -r 100 -b http://hoerspielsommer.de/`

```md
Transactions:                   1000 hits
Availability:                 100.00 %
Elapsed time:                 136.89 secs
Data transferred:               5.05 MB
Response time:                  0.71 secs
Transaction rate:               7.31 trans/sec
Throughput:                     0.04 MB/sec
Concurrency:                    5.20
Successful transactions:        1000
Failed transactions:               0
Longest transaction:            1.36
Shortest transaction:           0.19
```

Nice! That thing is three times as fast as the old setup and does not drop any transactions. Much, much better.

And then I remembered [that blogpost from a colleague of mine](http://www.kf-interactive.com/blog/website-performance-with-processwire-nginx-and-fastcgi_cache/) on performance with nginx and fastcgi\_cache, and I thought — let's give that a try and configure the cache accordingly for WordPress. After reading [a well written blog post on how to configure the cache for WordPress](https://rtcamp.com/wordpress-nginx/tutorials/single-site/fastcgi-cache-with-purging/) and installing [the WordPress-plugin »Nginx Helper«](https://wordpress.org/plugins/nginx-helper/) (which makes purging the cache from the backend a breeze) I ended up with the following config:

```nginx
fastcgi_cache_path /var/run/nginx-cache/hoerspielsommer.de levels=1:2 keys_zone=hoerspielsommer:20m inactive=10m;

server {
  listen [::]:80 deferred ipv6only=on;
  listen 80 deferred;
  server_name hoerspielsommer.de;
  root /var/www/hoerspielsommer.de/public;

  # fastcgi cache, exclude some requests from cache, by default cache everything
  set $skip_cache 0;

  # POST requests and urls with a query string should always go to PHP
  if ($request_method = POST) {
    set $skip_cache 1;
  }
  if ($query_string != "") {
    set $skip_cache 1;
  }
  # Don't cache uris containing the following segments
  if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
    set $skip_cache 1;
  }
  # Don't use the cache for logged in users or recent commenters
  if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in") {
    set $skip_cache 1;
  }

  fastcgi_cache_key "$scheme$request_method$host$request_uri";
  fastcgi_cache_use_stale error timeout invalid_header http_500;
  fastcgi_ignore_headers Cache-Control Expires Set-Cookie;

  location / {
      try_files $uri $uri/ /index.php?$args;
  }

  # Add trailing slash to */wp-admin requests.
  rewrite /wp-admin$ $scheme://$host$uri/ permanent;

  location ~ \.php$ {
    # include default fastcgi params
    include /etc/nginx/fastcgi_params;
    fastcgi_pass 127.0.0.1:9002;

    try_files $uri = /404;
    fastcgi_split_path_info ^(.+\.php)(/.+)$;
    fastcgi_param PATH_INFO $fastcgi_path_info;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;

    # cgi cache
    fastcgi_cache_bypass $skip_cache;
    fastcgi_no_cache $skip_cache;
    fastcgi_cache hoerspielsommer;
    fastcgi_cache_valid 20m;
  }

  # special purge location for purge script
  location ~ /purge(/.*) {
    fastcgi_cache_purge hoerspielsommer "$scheme$request_method$host$1";
  }
}
```

I just love nginx's syntax configuring different locations and server-blocks — it is so easy to understand what's going on. What I then had to do, was to create the actual cache path (line 1 from the config above) in `/var/run` and `chown -R www-data:www-data` it, so that nginx was allowed to write the cache files. `service nginx restart` and I was blown away: new server, with fastcgi\_cache active, 
`siege -c 10 -r 100 -b http://hoerspielsommer.de/`

```md
Transactions:                   1000 hits
Availability:                 100.00 %
Elapsed time:                  11.40 secs
Data transferred:               5.05 MB
Response time:                  0.11 secs
Transaction rate:              87.72 trans/sec
Throughput:                     0.44 MB/sec
Concurrency:                    9.32
Successful transactions:        1000
Failed transactions:               0
Longest transaction:            1.62
Shortest transaction:           0.04
```

87 transactions per second: that's __more than 40 times as fast__ as the old server. And no RAM usage by PHP oder MariaDB _at all_ (because everything is serverd from the fastcgi\_cache) means more headroom for some real traffic. And I can throw away any super/aweseome/real/whatnot WordPress cache plugins (that never really worked well anyway). Now the real siege on that festival-website can begin!

----

Tags: nginx,wordpress

----

Gallery: 0
