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
  templateData:
    site:
      url: "http://hearingirc.com"
  plugins:
    robotskirt:
      robotskirtOptions:
        HTML_HARD_WRAP: false
    sitemap:
      cachetime: 600000
      changefreq: 'weekly'
      priority: 0.5
      filePath: 'sitemap.xml'
    rss:
      default:
        collection: 'newsItems'
        url: '/rss.xml'
}

# Export the DocPad Configuration
module.exports = docpadConfig
