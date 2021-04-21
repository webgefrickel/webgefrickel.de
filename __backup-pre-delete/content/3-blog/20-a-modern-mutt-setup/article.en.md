Title: A modern mutt setup with neomutt, mbsync, msmtp and mu — part one

----

Date: 2017-10-11

----

Intro: I have switched to mutt as my main email client successfully for over half a year now. This is the first part of an in-depth post about how and why I did this. Prepare for config-files-porn!

----

Text: The older I become, the more I find my way back to the simple tools. This concerns many things in life, but for now we will focus on the terminal :) As some of you may know: my main editor is Vim (Neovim that is) and with npm, git and whatnot—most of the time I spent during a regular work-day, I spent inside the terminal.  So it eventually just made sense that I tried to bring as much of my day-to-day tools into the terminal. 

I really like writing text in Vim, so writing emails in Apple Mail (or any other email-client for that matter) always was kind of a pain in the ass. And writing an email in Vim and then copying and pasting it was just not satisfying enough. So I gave mutt a try and eventually sticked with it.

If you really are interested in using mutt, grab yourself some coffee, this is gonna be a longer journey. I would recommend that you set aside at least one evening, or even better: a rainy weekend day with some beer. Autumn is here, so this shouldn't be a problem.

## Assumptions

Before we get started, let me just tell you a bit about how I use email, since this will be reflected in the configuration and some keyboard-shortcuts:

- I practice zero-inbox: stuff that still is in my inbox is a todo-item, everything else will either be archived, deleted or marked as spam and thus moved into another folder away from the inbox.
- I currently have 4 IMAP-email accounts with different email-service-providers, none of them being a Google Mail Account (I still have one, but emails from there will just be forwarded to my main address)
- I have only one archive-folder per email account, I don't sort emails into project/customer-folders, I prefer to search through my emails instead.
- I want to fetch my emails manually. No push, no notifications, no distractions.
- I don't care about writing HTML-emails (and neither should you).
- I write emails in English and German in Vim.
- I run a current version of macOS.
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

What you then have to do is customize the shit out of mutt to marry it with all the other installed tools. Create keyboard-shortcuts for fetching/syncing/searching email, create shortcuts for saving attachments and everything else you might want to do. This all then happens from within mutt. Think of mutt as a command center for managing your emails.

Ready? Let's dive in:

## Installation

First up, let's install all the tools mentioned above. Assuming you are on macOS and having setup homebrew already, open up a terminal and throw those lines in there:

```bash
brew install gpgme
brew install isync
brew install khard
brew install msmtp
brew install mu
brew install neomutt
brew install ripmime
brew install w3m
brew install vdirsyncer
sudo pip3 install -I urlscan
```

(I could not find a formula for urlscan on homebrew, so we just use the python3-installer `pip3` to get this dependency.)

## Preparation

I like my contacts to be in the folder ~/Contacts and all my emails to be in ~/Mail. Every email account gets its own subfolder inside of ~/Mail. So let's create those folders. (For the sake of simplicity: I will just provide examples for two of my email accounts, and not all five I am actually using. You can extrapolate from there.  By the way, you can find all configuration files and installation scripts in my [dotfiles-repository on GitHub](https://github.com/webgefrickel/dotfiles/tree/master/office)).

```bash
mkdir ~/Contacts
mkdir ~/Mail
mkdir ~/Mail/mailbox
mkdir ~/Mail/viu
```

## Step 1: setting up mbsync / isync

Create a file ~/.mbsyncrc — this is where we will configure our email accounts to be synced via IMAP. A working example config would look like this, I'll explain in a second:

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
######## Account viu ############
#################################

IMAPAccount viu
Host outlook.office365.com
User steffen.rademacker@viu.ch
...
```
There are multiple things going on here, so let's look at it in detail:

In the first block we define the new account, give it an alias (»mailbox« from now on) and provide all credentials we need (host, user and password) and tell msmtp to only connect via a secure connection. The important bits here are the `PassCmd` and `CertificateFile` lines: 

The `PassCmd` uses a small shell command to retrieve your password from the systems keychain via the command `security`. While it is called security, it is not perfectly safesafe, but it is way better than either typing out your password every time or storing it as plain text.

To add your password to the macOS keychain, open the App »Keychain Access«, click on the tiny plus-button and enter your credentials for your email-account. The first time you will sync your emails, you may have to allow the program security access to your keychain and the new item in it. Note that the keychain-item's name should start with »http://«, so that the security command works correclty, so in my case I named it »http://imap.mailbox.org«.

The certificates-file contains all certificates from all the major authorities that mbsync needs for SSL communication. You already have those in your keychain, but mbsync can't just access your keychain, so you have to save those certificates in a single file and point mbsycn to it. You could either just use mine (really!) or export the file yourself:

Open up your keychain again, click »System Roots« under the Keychain-Listing, click on »Certificates« in the Category-Listing, select all certificates shown, and the right click, choose »Export xxx items«, and save the file to the path provided above. (I store all email-related config-files in ~/dotfiles/office).

Now that we have set up all the credentials and authentification-related stuff, we tell mbsync what to sync where. First up, we define the remote and local storages. You can name them whatever you want, I chose »mailbox-remote« and  »mailbox-local«. For the local storage we tell mbsync to treat it as a default Maildir. This is the most common format and plays very well with mutt.

The last thing to be done is to provide the so called channels, basically telling mbsync "Hey, if you find that folder on the imap server, please sync it to this local folder on my system". Each folder gets its own channel, Master is the remote-Folder and Slave the local one. Here we use the storage-aliases defined above. The Create/Expunge settings tell mbsync, that it should always delete/create any emails it finds, so it will be totally in sync always. Please note, that you have to be very explicit with the naming of the folders, I had to use the actual value of the broken-umlaut (not UTF-8 here) name of my folder »Entw&APw-rfe« (meaning Entwürfe, which translates to Drafts), to get this to work properly.

Finally you can create a group, that tells mbsync which items should get synced with the command `mbsync groupname`—I just use one group for each email-account, syncing all its folders. But you could also define something like: sync all inboxes or all archives etc.

## Step 2: setting up msmtp

For the plain sending of emails, we use msmtp. This basically works the same like setting up mbsync, we start by creating a config file in ~/.msmtprc, that looks sth. like this:

```
account mailbox
host smtp.mailbox.org
port 465
protocol smtp
auth on
user s.rademacker@mailbox.org
from s.rademacker@mailbox.org
tls on
tls_starttls off
tls_trust_file ~/dotfiles/office/certificates.crt

account hsv
host sslout.df.eu
port 465

...
```

Nothing much going on here, you just have to take care that you use the correct SSL-method and port. msmtp can communicate with the macOS keychain, so no weird security-command here, you just need to add a new, separate entry to your keychain named exactly as your smtp-server (and prefix it with smtp
:// — so it would be smtp://smtp.mailbox.org for the example above), exactly as for mbsync. The certificates-file is the same file we just created as well.

You can test if this really is working by sending a simple email via the terminal, using this command:

```
echo "Test" | msmtp -a mailbox youremail@domain.com
```

If you receive an email at youremail@domain.com, you have configured msmtp correctly!

And that's it for the first part, you have working IMAP-sync and are ready to send emails! Now open up a terminal and enter `mbsync -a` to sync all emails from all accounts. Depending on how much mail you have, this may take a while, so grab yourself a beer and stay tuned for part two!

----

Tags: mutt, privacy

----

Gallery: 0
