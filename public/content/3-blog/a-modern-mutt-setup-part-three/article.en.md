




```
# when composing emails, use this command to get addresses from
# the addressbook with khard first, and everything else from mu index
set query_command = "( khard email --parsable '%s' | sed -n '1!p'; mu cfind --format=mutt-ab '%s' )"
```

I want to use khard as a command-line tool to find contacts from my address-book, as well as mu to find any email-addresses from all emails stored in the mail-folder. The query_command just does that. So when composing an email in mutt and it asks me for an email-address, I just type the first few chars of an email, hit Tab, and then I get a list—think autocompletion of email-addresses.




## TOOLS

urlscan
ripmime
mu
khard + vdirsyncer
w3m



# View attachments properly.
bind attach <return> view-mailcap

# Drafts
bind compose P postpone-message
bind index p recall-message

# finding stuff
bind editor <tab> complete-query
macro index F "<shell-escape>mu find --clearlinks --format=links --linksdir=~/.mu/results " "mu find"
macro index \cf "<change-folder-readonly>~/.mu/results<enter>" "mu find results"


[in Steve Losh's excellent article on using mutt](http://stevelosh.com/blog/2012/10/the-homely-mutt/#retrieving-passwords)


## Stuff I still have not figured out

Opening email-Links from the web-browser of choice in an open mutt-instance inside of tmux in my terminal emulator of choice. Well. Copy &amp; paste works :/

## Some links, inspiration and blog posts that helped me a lot

http://stevelosh.com/blog/2012/10/the-homely-mutt/
https://pbrisbin.com/posts/two_accounts_in_mutt/
http://blog.developwithpassion.com/2013/05/02/getting-up-and-running-with-a-sane-mutt-setup/
http://zanshin.net/2015/01/19/teaching-a-homely-mutt-new-tricks/
