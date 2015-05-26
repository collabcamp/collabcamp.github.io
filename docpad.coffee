# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	regeneratePaths: [
		'src'
	]

	plugins:
    ghpages:
        deployRemote: 'origin'
        deployBranch: 'master'

	templateData:
		site:
			url: "http://collab.camp"
			title: "CollabCamp"
			description: "Uniting hackers, visionaries, entrepreneurs in taking a collective responsibility for our common future on this planet; celebrating collaboration and sharing; developing project concepts, code, graphics, documents and videos. Let's get it done!"
			keywords: "collaboration, sharing, openness, sharing economy, hacking, making the world a better place"

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
