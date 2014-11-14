# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
#	regeneratePaths: [
#		'src'
#	]

	plugins:
    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'

	templateData:
		site:
			url: "http://transformap.co"
			title: "TransforMap"
			description: """
				Mapping socio-ecological innovation. There are thousands of alternatives; we make them visible!
				"""
			keywords: """
				OpenStreetMap, TransforMap, Laniakea
				"""
			author: """
				Jon Richter
			"""

		getPreparedTitle: ->
			if @document.title
				"#{@document.title} | #{@site.title}"
			else
				@site.title

		getPreparedDescription: ->
			@document.description or @site.description

		getPreparedKeywords: ->
			@site.keywords.concat(@document.keywords or []).join(', ')
}

# Export the DocPad Configuration
module.exports = docpadConfig
