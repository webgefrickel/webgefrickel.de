Title: Reclaiming my data, Part 3 — all other services

----

Date: 2016-04-07

----

Intro: After getting rid of »everything Google«, I evaluated all the other cloud-services and third-party stuff I used. There are lots of free, open-source alternatives to things like Dropbox, Feedly or Pocket, and in this blog post I will talk about some of those alternatives.

----

Text: I have used self-hosted solutions for the everyday tasks for almost a year now, and I am very happy with all of them. Before we get into the details there is one thing I would absolutely recommend before even thinking about reclaiming your data from those third-party providers: get your own server. 

While you can get good shared-hosting plans from almost any provider, getting your own server really gives you the flexibility and configurability you need, and with [letsencrypt](https://letsencrypt.org) you get free SSL for everything you want to use. A medium-sized virtual server should be enough, but if you have the spare money, nothing beats a dedicated server. You can configure everything to your liking, and you often have to, to get those apps running on your machine.
This can be a lot of work, especially if you are new to the whole linux/server world. In the end, this is the price you pay for reclaiming your data. For example: you can throw all your files into Dropbox and be happy that everything works, but then struggle with the free storage limit and that your files are saved somewhere in the cloud (read: someone else's computer). Or you run your own instance of ownCloud, but then struggle with the setup and maintenance. For a sake of good sleep and a better nerd-level I chose the latter. 

As for storage you are limited by the capacity of your server, and you can get a decent box with ~500 GB for around 20 bucks per month. Dropbox offers 1 TB for 10 bucks/month, but that's only for Dropbox. If you add up all the costs for the other services you use (GitHub, feedly etc.) it quickly becomes a no-brainer. If you then add the time you need for maintenance and setup of your server, this can go in the other direction. But for me this is fun, and I learn a lot, so still: no-brainer.

Let's get into some of the services and their alternatives:

## Dropbox vs. ownCloud

With the recently released [ownCloud 9.0](https://owncloud.org) there is a very good and stable alternative to your common cloud-solution, such as Dropbox, Google Drive or SkyDrive. Upgrading and installing ownCloud is not that easy, but their tutorials and guides are very helpful and provide all usual scenarios. I installed ownCloud on my nginx-server, and use their [default nginx configuration](https://doc.owncloud.org/server/9.0/admin_manual/installation/nginx_configuration.html) and everything works fine. After you have your ownCloud-server up and running you just install one of their clients on your computer or iOS/Android device, and you are all set.

You have to have an SSL-certificate to use ownCloud, and this is where [letsencrypt](https://letsencrypt.org) comes into play. Just install the letsencrypt-client on your server, and get a certificate for the domain or subdomain you want to use ownCloud with. While letsencrypt is still beta, it is very easy to use and free as in beer.

ownCloud can even run a CalDAV/CardDAV-Server for all your calendar-syncing-needs, but for now I leave this task to my trusted mail-provider.

## iCloud vs. CalDAV / CardDAV

Speaking of calendars, todo-lists and contacts: this is the only area where I ever used Apples iCloud to sync my devices and keep my calendars up-to-date. While Apples iCloud does a very good job at this, this problem was solved ages ago with CalDAV and CardDAV and can be used with almost any device. Setup your CalDAV-Server in ownCloud, create calendars and then just use them in your calendar-app of choice. And since you can create reminders and todos in your calendars, there is no need for apps like [wunderlist](https://www.wunderlist.com/) or [Things](https://culturedcode.com/things/). While those todo-apps provide a very nice interface and better GTD-workflows, I would argue that simple todo-lists work for 90% of us. I use the built-in Reminders app from OS X as an interface for my CalDAV todos, and do not miss a thing.

Same thing for your contacts: there really is no need to give Google, Apple or some other provider all those email-addresses and phone numbers of your friends, family and colleagues. Create a CardDAV-Account in ownCloud and use the data from there, everywhere.

## GitHub vs. GitLab

I still love and use GitHub and I would argue that it was the best thing that could happen to the open-source-community. I fiddled around with [GitLab](https://gitlab.com) for some private repositories. GitLab is especially useful for agencies or companies, that have a lot of private repositories with sensitive data, that should not be hosted anywhere else, but on their own servers. GitLab, much like ownCloud, is a beast and it takes some setup and configuration to get it up and running, if you don't use their installer. Once it's working, you have a very nice GitHub-clone, with all the important features you need. Milestones, pull requests, issues, a nice interface etc. pp.

In the end, GitLab was too much for me and my private use as a freelancer, so I uninstalled it from my server. As a backup to my GitHub-hosted repositories I just use a dedicated git-user on my server and push to bare-repositories, that's enough for me and works very well.

## Feedly vs. Tiny Tiny RSS

After the death of Google Reader I switched to [feedly](https://feedly.com) to organize my RSS-feeds and news. I never really liked their interface and only consumed my feeds via the awesome [Reeder](http://reederapp.com) app for OS X and iOS. Nowadays I rarely open up my RSS-Feeds, since I get most of my news and relevant articles via Twitter or some newsletters I've subscribed to.

Nonetheless, there are some websites and blogs I really would miss and maybe even forget, and thus I switched from feedly to the self-hosted [Tiny Tiny RSS](https://tt-rss.org). Install it from their GitLab-powered repository, setup a cron-job, import your feeds and you are done. I installed the [fever-plugin](https://github.com/dasmurphy/tinytinyrss-fever-plugin), so I can still use Reeder to consume my feeds, and it all works flawlessly. I barely even use the web-interface and just randomly open up Reeder, it syncs with my server and I don't miss a single XKCD-comic this way.

## Pocket vs. wallabag

I use multiple browsers with multiple windows and multiple tabs, but still I really liked those read-it-later-services, such as [pocket](https://getpocket.com), [Readability](https://readability.com) or [Instapaper](https://instapaper.com). I tried and used all of those, and really liked pocket the most. But since »reclaim-everything!«, I switched to [wallabag](https://wallabag.org), a self-hosted, read-it-later tool, with a nice and simple interface. I was able to import most of my pocket- and Readability-articles into wallabag and there are even browser-extensions and apps for iOS and Android to read your articles with (offline). So far I like it, let's see what the soon to be released version 2 will bring.

And that's it. 

To sum things up, I still use the following third-party services, because I really like them or there is no real alternative: Google (Search, Maps and YouTube), GitHub (because it's awesome) and my trusted mail-provider.

I have accounts at Twitter, ebay, amazon, netflix and you-name-it — but that's another story. In the end, it was an experiment and I wanted to know how much of my data I could reclaim, and so far, I am quite happy with all the open-source-alternatives for my most often used services.

----

Tags: privacy

----

Gallery: 0
