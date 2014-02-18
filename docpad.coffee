# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  regenerateDelay: 0,
  watchOptions:
    catchupDelay: 0
  collections:
    newsItems: ->
      @getCollection("html").findAllLive({isPage:true}, [date:-1])
  plugins:
    robotskirt:
      robotskirtOptions:
        HTML_HARD_WRAP: false
}

# Export the DocPad Configuration
module.exports = docpadConfig
