# HearingIRC website

This repository contains the source for the HearingIRC website. The site
is built with the [Docpad](http://docpad.org/) static site generator.

## Development requirements

* Node.js
* npm

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

## License
Copyright &copy; 2014+ All rights reserved.
