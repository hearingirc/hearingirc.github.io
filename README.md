# HearingIRC website

This repository contains the source for the HearingIRC website. The site
is built with the [Docpad](http://docpad.org/) static site generator.

## Development requirements

* Node.js
* npm
* [Optional] Ruby &amp; Bundler (to follow/leverage the deployment process)
  * Although this can be (easily) done manually, the 'deployment' script
    enforces a level of consistency in the commit messages which will simplify
    tracking when the site has been updated. Please don't deploy manually unless
    you know what you are doing and you have a good reason for doing so.

## Contributing site updates

### Setup

1. Clone repository
1. `cd` into the repository directory and execute `npm install`
1. Execute `./node_modules/.bin/docpad run`
1. Visit http://127.0.0.1:9778/

### Adding content or changing layout...

Edit source files and everything should auto-compile and reload in the browser for you.

If that is not the case, file an issue and/or fix it and send a pull request.

### Developer Notes

1. The two primary "markup-related lanugages" used are HAML and Markdown. If the page you
   are editing is "mostly structure", use HAML. If it's mostly content, use Markdown.
1. You can run multiple pre-processors against a file by following naming conventions inpsired
   by Rails. For example: `index.html.md.haml` will be run through the HAML pre-processor, then
   the Markdown pre-processor, and then it will be saved as `index.html` in the `out` directory.
1. Sometimes (but not often), if things don't seem to be live-reloading correctly...restart the
   development server...it seems to get confused every once in a while. This is particularly true
   if you edit a config file or file meta-data (content at the top of the files inside the `---`'s).

### Deploying the site

The site is hosted on Github's [Pages](http://pages.github.com/) infrastructure, so updating the
site is as simple as generating the current status, committing on the `master` branch, and pushing
to the repository.

To create consistency and records of updates to the public site, we have written a small Ruby script
that handles all the details of updating the site, other than pushing to the repository.

Outside of handling correctly moving files from the `out` directory and enforcing some basic rules
in the commit message, this script adds the commit identifier of the `development` branch commit
the site was generated from. Also, the way it adds it makes it trivial to `grep` for all the
`development` branch commits we have deployed to `production`.

*So, please use the script...*

Here's what you need to do to deploy:

1. Execute `bundle install`
   - This will install the Ruby library dependencies for making the output easier to read and interfacing
     with git (only required the first time, or after Ruby dependency updates [should be rare])
1. Execute `bundle exec ./bin/update-site`
   - The site is generated and you are prompted for confirmations and a commit message.
   - Note, you must have all changes committed before you can deploy.
1. Verify status of `master` branch
   - Do whatever you feel is necessary (`git log` it, switch to that branch and review it locally, etc).
1. Push to Github by executing `git push`.

Congrats, you just updated the site...


## License
Copyright &copy; 2014+ All rights reserved.
