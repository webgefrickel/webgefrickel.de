Title: Reclaiming my data, Part 1 — Gmail

----

Date: 2015-07-01

----

Intro: I proclaimed 2015 to be the year I will be reclaiming my data. Thank you Mr Snowden, fuck you cloud. This is the first blog post of a series in how I try to achieve that goal, and my failed attempt at getting rid of everything Google.

----

Text: 

At the beginning of 2015 I decided to take appropriate action on everything fucked up regarding NSA, GSHQ the BND and all the companies involved in doing creepy stuff with my data. I've deleted my facebook-account almost one and a half years ago, and with that out of the way, the next major one to tackle would be Google. This blog post is in no way intended to bash Google products, they offer a lot of awesome tools and services and in many ways try to make the internet a better place. 
But after getting really creepy ads when logged into Google Mail, I decided to at least try to get rid of some of their offerings. By the way: it is sad, but nowadays adblockerss like [Adguard](http://adguard.com/en/adguard-adblock-browser-extension/overview.html) are almost mandatory, IMHO. But sometimes I turn them off just to get a glimpse of how broken the web really is :/ — and to see how creepy targeted advertising has become).

I look at this more as an experiment, because I know it is impossible to don't use anything Google at all — just *look* at [the list of Google products](https://en.wikipedia.org/wiki/List_of_Google_products). Google is an important part of the internet, they are here to stay, and there is no way to stay completely Google-free. Prove me wrong.

Let's have a look at what Google products I've used, the alternatives, and which ones I will still be using in the future. First up: Google Mail aka Gmail.

## The Good, the Bad and the Ugly

I've had three email-accounts at Gmail, one work-related and two private accounts. I was using Gmail since their beta, I received an invite from a friend back then and I really loved it. Free, working IMAP (which was not the default at that time) with tons of space and a nice web-interface? Count me in. So why would I want to use something else? Well, the answer is quite obvious: privacy — because [Google scans your emails](http://www.google.com/intl/en/policies/terms/#toc-content), I quote:

> Our automated systems analyze your content (including emails) to provide you personally relevant product features […]

I don't want that. And don't say that famous »But I've got nothing to hide« line. You do, everybody does. Wanna show me your private parts or tell me the security code of your credit card? Yeah, thought so.

## Where to go?

The tedious task: finding a new email-service. Well, the obvious idea would have been to do this on my own, but running an email server is quite a hard task, if you want to get everything right — DANE, SPF and spam, spam, spam. Of course there is [iRedMail](http://iredmail.org/features.html) and [Mail-in-a-box](https://mailinabox.email/), but I just didn't feel up to it. So I poked around the internet, found [some](https://www.privacy-handbuch.de/handbuch_31.htm) [lists](http://www.prxbx.com/email/) collecting privacy-conscious email providers, and then I just had to pick one.

After some trial and error I finally picked [mailbox.org](https://mailbox.org). Their servers are in Germany, I don't have to give them any address data or my real name, and technology-wise they are up to date and open about their development. And I can use their service with my own domains and they offer full PGP-encryption with my own public key. 42 Euro/year isn't cheap, but for 25GB of email-storage that was a number I could live with (pun intended). Disclaimer: I pay for their service, and I have nothing to do with them.

## Clean it up, back it up

I wanted to start fresh anyway, so migrating my emails and folders to the new provider was not necessary. But of course I wanted a working backup of my emails. I am using Apple Mail, so theoretically every single email should already be backed up in `~/Library/Mail`. Enter paranoia, enter [offlineimap](https://github.com/OfflineIMAP/offlineimap). It's a simple command line tool to backup/sync all your IMAP-Accounts with your computer, exactly what I needed for this task. After a simple `brew instal offlineimap` on the terminal I just had to configure offlineimap to get emails from all three Gmail-accounts. The following example config is for a single account:

```ini
[general]
accounts = Gmail

[Account Gmail]
localrepository = Gmail-Local
remoterepository = Gmail-Remote

[Repository Gmail-Local]
type = Maildir
localfolders = ~/mail/backup/gmail

[Repository Gmail-Remote]
type = Gmail
remoteuser = me@gmail.com
remotepass = xxxxx
realdelete = no
maxconnections = 3
sslcacertfile = ~/ca-certificates.crt
```

The only problem I had was that on OS X, CA certificates are not stored as files anywhere on the system. Let's fix that:

* open up Keychain Access
* go to "System Roots"
* select all certificates and then from the menu choose "File > Export Items"
* as File Format choose "Certificate (.cer)"

(image: export-certificates.png alt: Export certificates from Keychain Access)

Point offlineimap to the file you just created (the last line in the config above) and then just run `offlineimap` from the terminal. Offlineimap now fetches every single email, so for me I just let my computer running over night.

## Final steps to Google-free email

I had my backup and I had new email-accounts so the last thing I did was to activate email-forwarding in my Gmail-Accounts. This way I could still receive all emails send to the old address, but reply with my new one. That all was about four months ago, and I haven't received any important emails to my Gmail-accounts in the past few weeks, so I've just now deleted all my Gmail-Accounts (after I used Google Takeout — more paranoia FTW! — to get all my data…). The end of an era — goal achieved!

## I still have a Google account

So far I am very satisfied with mailbox.org, their support is awesome and I don't miss a thing. I don't use Gmail anymore, but I still have a Google account. There just are too many services that I still need, but that's a topic for some upcoming blog posts :)

----

Tags: privacy

----

Gallery: 0
