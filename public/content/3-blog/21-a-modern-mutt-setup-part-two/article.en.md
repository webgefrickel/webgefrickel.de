Title: A modern mutt setup — part two

----

Date: 2018-05-06

----

Intro: Part two of my mutt-config: this time we talk about actually using and configuring mutt, and some other smaller tools needed for a nice email-workflow.

----

Text: In [part one](https://webgefrickel.de/blog/a-modern-mutt-setup) we covered installing everything we need and configuring mbsync and msmtp, for receiving and sending emails. If you did everything correctly, you should now have a folder ~/Mail containing all your emails. So what to do now?

TL;DR: Look at my github-dotfiles repository: [config-folder for mutt](https://github.com/webgefrickel/dotfiles/tree/master/office/mutt)

## Step 3: setting up mutt

As I've said before: think of mutt as a text-based interface for your email-accounts and the folders therein. You can and should customize almost every keystroke of how you want to use mutt, but first we start with some sane defaults for mutt:

To bundle everything mutt-config-related I created a folder called ~/.mutt with different config-files. Let's start with the [muttrc-file](https://github.com/webgefrickel/dotfiles/blob/master/office/mutt/muttrc)—I gonna split this up, and will go into the details:

```
# paths
set folder = ~/Mail
set header_cache = ~/.mutt/cache/headers
set message_cachedir = ~/.mutt/cache/bodies
set certificate_file = ~/dotfiles/office/certificates.crt
set mailcap_path = ~/.mutt/mailcap
set tmpdir = ~/.mutt/tmp
```

First, we set the folders and paths for stuff mutt needs. The most important thing here is the first line, pointing mutt to the actual folder where mbsync stores all email. The certificates-file is the same as for mbsync/msmtp as well. We will get to the mailcap-file later&hellip; Next up—some sane defaults:

```
# basic options
set wait_key = no
set mbox_type = Maildir
set timeout = 3
set mail_check = 0
set delete
set quit
set thorough_search
unset confirmappend
unset move
unset mark_old
unset beep_new
```

The most important part here is that we tell mutt to treat our ~/Mail folder as Maildir-format (line 3). This is important, as mutt could not read the emails we have synced with mbsync. I won't go into the details of every option here, just google for them or have a look at the manual here: [neomuttrc manual](https://www.neomutt.org/man/neomuttrc). Basically this configs makes mutt behave: no beeping, sane quitting and deletion of emails.

Next we configure mutt to behave, when we are in »compose«-view, e.g. writing and sending emails:

```
# compose View Options
set envelope_from                    # which from?
set edit_headers                     # show headers when composing
set fast_reply                       # skip to compose when replying
set askcc                            # ask for CC:
set fcc_attach                       # save attachments with the body
set forward_format = "Fwd: %s"       # format of subject when forwarding
set forward_decode                   # decode when forwarding
set attribution = "On %d, %n wrote:" # format of quoting header
set reply_to                         # reply to Reply to: field
set reverse_name                     # reply as whomever it was to
set include                          # include message in replies
set forward_quote                    # include message in forwards
set editor = "nvim"
set text_flowed
unset sig_dashes                     # no dashes before sig
unset mime_forward                   # forward attachments as part of body
```

I want mutt to ask me if I want to add an CC-field by default (which is something I do very often), show me all headers and just behave nicely when I want to write an email. The important setting here is `set editor = "nvim"`—because that was the whole point of me wanting to use mutt: I want to write emails in Vim.

```
# status bar, date format, finding stuff etc.
set status_chars = " *%A"
set status_format = "[ Folder: %f ] [%r%m messages%?n? (%n new)?%?d? (%d to delete)?%?t? (%t tagged)? ]%>─%?p?( %p postponed )?"
set date_format = "%d.%m.%Y %H:%M"
set index_format = "[%Z] %?X?A&-? %D  %-20.20F  %s"
set sort = threads
set sort_aux = reverse-last-date-received
set uncollapse_jump
set sort_re
set reply_regexp = "^(([Rr][Ee]?(\[[0-9]+\])?: *)?(\[[^]]+\] *)?)*"
set quote_regexp = "^( {0,4}[>|:#%]| {0,4}[a-z0-9]+[>|]+)+"
set send_charset = "utf-8:iso-8859-1:us-ascii"
set charset = "utf-8"
```

UTF-8 all teh things! Another important line here is the index_format: here we define what fields of an email will be shown in the overview of an email-folder: called the index. 

```
# when composing emails, use this command to get addresses from
# the addressbook with khard first, and everything else from mu index
set query_command = "( khard email --parsable '%s' | sed -n '1!p'; mu cfind --format=mutt-ab '%s' )"
```

I want to use khard as a command-line tool to find contacts from my address-book, as well as mu to find any email-addresses from all emails stored in the mail-folder. The query_command just does that. So when composing an email in mutt and it asks me for an email-address, I just type the first few chars of an email, hit Tab, and then I get a list—think autocompletion of email-addresses.

```
# Pager View Options
set pager_index_lines = 10
set pager_context = 3
set pager_stop
set menu_scroll
set tilde
unset markers

# email headers and attachments
ignore *
unignore from: to: cc: bcc: date: subject:
unhdr_order *
hdr_order from: to: cc: bcc: date: subject:
alternative_order text/plain text/enriched text/html
auto_view text/html

# sidebar patch config
set sidebar_visible
set sidebar_short_path
set sidebar_folder_indent
set sidebar_width = 25
set sidebar_divider_char = ' | '
set sidebar_indent_string = '  ''
set sidebar_format = "%B %* [%?N?%N / ?%S]"
set mail_check_stats

# GPG/PGP 
set pgp_sign_as = 2F283D0D
set crypt_use_gpgme = yes
set crypt_autosign = no
set crypt_verify_sig = yes
set crypt_replysign = yes
set crypt_replyencrypt = yes
set crypt_replysignencrypted = yes

# Mailboxes to show in the sidebar.
mailboxes =mailbox
mailboxes =mailbox/INBOX =mailbox/archive =mailbox/sent =mailbox/drafts =mailbox/junk =mailbox/trash
mailboxes =hsv
mailboxes =hsv/INBOX =hsv/archive =hsv/sent =hsv/drafts =hsv/junk =hsv/trash

# source colors and keybindings
# keeping those in one place makes it easier for my brain
source ~/.mutt/colors
source ~/.mutt/bindings

# And finally the account config for multiple accounts
#############################################################

# by default, use mailbox
set realname = "Steffen Rademacker"
set spoolfile = "+mailbox/INBOX"
source ~/.mutt/accounts/mailbox

# when changing into other mailboxes, use different adresses etc.
folder-hook mailbox/* source ~/.mutt/accounts/mailbox
folder-hook hsv/* source ~/.mutt/accounts/hsv
```

TODO










[in Steve Losh's excellent article on using mutt](http://stevelosh.com/blog/2012/10/the-homely-mutt/#retrieving-passwords)

## Stuff I still have not figured out

Opening email-Links from the web-browser of choice in an open mutt-instance inside of tmux in my terminal emulator of choice. Well. Copy &amp; paste works :/

## Some links, inspiration and blog posts that helped me a lot

http://stevelosh.com/blog/2012/10/the-homely-mutt/
https://pbrisbin.com/posts/two_accounts_in_mutt/
http://blog.developwithpassion.com/2013/05/02/getting-up-and-running-with-a-sane-mutt-setup/
http://zanshin.net/2015/01/19/teaching-a-homely-mutt-new-tricks/
