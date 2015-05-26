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
			description: "CollabCamp events bring together social entrepreneurs, sharers, hackers, government officials and citizens to collaboratively work on projects which benefit the collaborative economy (sharing). CollabCamp events are free to attend. We celebrate collaboration and sharing. Let's get it done!"
			keywords: "collaboration, sharing, openness, sharing economy, hacking, making the world a better place"
		video_url: "https://www.youtube.com/embed/TH1DUUjjuGY"

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
