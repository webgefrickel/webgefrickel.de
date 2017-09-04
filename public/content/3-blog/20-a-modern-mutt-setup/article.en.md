Title: A modern mutt setup with neomutt, mbsync, msmtp and mu

----

Date: 2017-09-04

----

Intro: I have switched to mutt as my main email client successfully for about over half a year now. This is an in-depth post about how and why I did this. Prepare for config-files-porn!

----

Text: The older I become, the more I find my way back to the simple tools. This concerns many things in life, but for now we will focus on the terminal :) As some of you may know: my main editor is Vim (Neovim that is) and with npm, git and whatnot most of the time I spent during a regular work-day is spent inside the terminal.  So it eventually just made sense that I tried to bring as much of my day-to-day tools into the terminal. 

I really like writing text in Vim, so writing emails in Apple Mail always was kind of a pain in the ass. And writing an email in Vim and then copying and pasting it was just not satisfying enough. So I gave mutt a try and eventually sticked with it.

If you really are interested in using mutt, grab yourself some coffee, this is gonna be a long article. I would recommend that you set aside at least one evening, or even better: a rainy weekend day with some beer.

## Assumptions

Before we get started, let me just tell you a bit about how I use email, since this will be reflected in the configuration and some keyboard-shortcuts:

- I practice zero-inbox: stuff that still is in my inbox is a todo-item, everything else will either be archived, deleted or marked as spam.
- I currently have 5 IMAP-email accounts with different email-service-providers, none of them being a Google Mail Account (I still have one, but emails from there will just be forwarded to my main address)
- I have only one archive-folder per email account, I don't sort emails into project/customer-folders, I prefer to search through my emails instead.
- I want to fetch my emails manually. No push, no notifications, no distractions.
- I don't care about writing HTML-emails (and neither should you).
- I write emails in English and German in Vim.
- I have an address book with important email addresses that I like to use via CardDAV-Sync, autocompletion for when writing emails is a must.
- All emails will be synced to a local folder on my computer, as an eternal backup.

If your workflow differs greatly, you will have to change things here and there, but since this is a pretty simple way of handling emails, you should be able to use this as a good starting point.

## Understanding how everything works together

Using mutt is not just done by installing, configuring and using it. There are a lot of tools involved that all do different things regarding emails.  This is what initially was a bit hard to grasp for me, but in the end it totally makes sense and adheres to the Unix-philosophy: make each program do one thing well. So here are the tools I am using and what they are doing:

- [mbsync](http://isync.sourceforge.net/mbsync.html): synchronizes multiple IMAP-Accounts with local folders on my machine. Nothing more, nothing less: working, fast, fail-safe IMAP sync.
- [msmtp](http://msmtp.sourceforge.net/): sends emails, duh.
- [mu](https://www.djcbsoftware.nl/code/mu/): indexes your email and provides a search interface for within all of your emails
- [vim](https://neovim.io/): Neovim ist my text editor of choice. For writing emails.
- and finally: [mutt](https://www.neomutt.org/), in this case: neomutt — a modern fork of mutt with some nice additional patches and packages baked in. In the end, mutt is just an interface for reading, deleting, sorting and finding emails

Those are the core tools required to get up and running with writing and reading emails with mutt. But we do not stop here, there are some other smaller tools needed: for viewing/saving attachments, extracting and opening URLs etc. pp., so here we go, bonus round!

- [vdirsyncer](https://vdirsyncer.pimutils.org/en/stable/): synchronizes CardDAV-Contacts from your address book
- [khard](https://github.com/scheibler/khard): makes the synchronized contacts from vdirsyncer available for use in mutt
- [ripmime](http://www.pldaniels.com/ripmime/): save attachments from emails
- [urlscan](https://github.com/firecat53/urlscan): scans emails for URLs for easy opening in your browser of choice
- [w3m](http://w3m.sourceforge.net/): convert stupid ugly HTML-emails into something readable in mutt
- [gpgme](https://www.gnupg.org/software/gpgme/index.html): while there are not many people using encryption in emails, I do when applicable

Those are the tools that you need. In the end it works like this: after having installed and configured everything you fire up mutt. Mutt at this point does nothing more then to provide an interface for managing the emails sitting in your local mail folder. You can scroll through your inboxes and view emails, delete them, move them etc. pp. 

What you then have to do is customize the shit out of mutt to marry it with all the other installed tools. Create keyboard-shortcuts for fetching/syncing/searching email, create shortcuts for saving attachments and everything else you might want to do. This all then happens from within mutt. Think of mutt as an command center for managing your emails.

Ready? Let's dive in:

## Installation

First up, let's install all the tools mentioned above. Assuming you are on macOS and having setup homebrew already, open up a terminal and throw those lines in there:

```bash
brew install gpgme
brew install isync
brew install khard
brew install msmtp
brew install mu
brew install neomutt/homebrew-neomutt/neomutt --with-gpgme
brew install ripmime
brew install w3m
brew install vdirsyncer
sudo pip3 install -I urlscan
```

I could not find a formula for urlscan on homebrew, so we just use the python3-installer `pip3` to get this dependency.

## Preparation

I like my contacts to be in the folder ~/Contacts and all my emails to be in ~/Mail. Every email account gets its own subfolder inside of ~/Mail. So let's create those folders. (For the sake of simplicity: I will just provide examples for two of my email accounts, and not all five I am actually using. You can extrapolate from there.  By the way, you can find all configuration files and installation scripts in my [dotfiles-repository on GitHub](https://github.com/webgefrickel/dotfiles/office)).

```bash
mkdir ~/Contacts
mkdir ~/Mail
mkdir ~/Mail/mailbox
mkdir ~/Mail/hsv
```

## Step 1: setting up mbsync / isync

Create a file ~/.mbsyncrc — this is where we will configure our two email accounts to be synced via IMAP. A working example config would look like this, I'll explain in a second:

```
#################################
######## Account mailbox ########
#################################

IMAPAccount mailbox
Host imap.mailbox.org
User s.rademacker@mailbox.org
PassCmd "security find-internet-password -s 'imap.mailbox.org' -a 's.rademacker@mailbox.org' -w"
SSLType IMAPS
SSLVersions TLSv1.2
CertificateFile ~/dotfiles/office/certificates.crt

# Remote storage
IMAPStore mailbox-remote
Account mailbox

# Local storage
MaildirStore mailbox-local
Path ~/Mail/mailbox/
Inbox ~/Mail/mailbox/INBOX

Channel mailbox-inbox
Master :mailbox-remote:"INBOX"
Slave :mailbox-local:INBOX
Create Both
Expunge Both

Channel mailbox-archive
Master :mailbox-remote:"Archiv"
Slave :mailbox-local:archive
Create Both
Expunge Both

Channel mailbox-drafts
Master :mailbox-remote:"Entw&APw-rfe"
Slave :mailbox-local:drafts
Create Both
Expunge Both

Channel mailbox-sent
Master :mailbox-remote:"Gesendete Objekte"
Slave :mailbox-local:sent
Create Both
Expunge Both

Channel mailbox-trash
Master :mailbox-remote:"Papierkorb"
Slave :mailbox-local:trash
Create Both
Expunge Both

Channel mailbox-junk
Master :mailbox-remote:"Spam"
Slave :mailbox-local:junk
Create Both
Expunge Both

Group mailbox
Channel mailbox-inbox
Channel mailbox-archive
Channel mailbox-drafts
Channel mailbox-sent
Channel mailbox-trash
Channel mailbox-junk

#################################
######## Account hsv ############
#################################

IMAPAccount hsv
Host sslin.df.eu
User s.rademacker@hoerspielsommer.de

...
...
```
There are multiple things going on here, so let me explain line by line:

In the first block we define the new account, give it an alias and provide all credentials we need (host, user and password) and tell msmtp to only connect via IMAPS TLSv1.2. The important bits here are the `PassCmd` and `CertificateFile` lines: 


[in Steve Losh's excellent article on using mutt](http://stevelosh.com/blog/2012/10/the-homely-mutt/#retrieving-passwords)

## Stuff I still have not figured out

Opening email-Links from the web-browser of choice in an open mutt-instance inside of tmux in my terminal emulator of choice. Well. Copy &amp; paste works :/

## Some links, inspiration and blog posts that helped me a lot

http://stevelosh.com/blog/2012/10/the-homely-mutt/
https://pbrisbin.com/posts/two_accounts_in_mutt/
http://blog.developwithpassion.com/2013/05/02/getting-up-and-running-with-a-sane-mutt-setup/
http://zanshin.net/2015/01/19/teaching-a-homely-mutt-new-tricks/
