# [CollabCamp website](http://collab.camp/)

using [Jekyll](http://jekyllrb.com/)

CollabCamp events bring together social entrepreneurs, sharers, hackers, government officials and citizens to collaboratively work on projects which benefit the collaborative economy (sharing). CollabCamp events are free to attend. We celebrate collaboration and sharing. Let's get it done! 

### Structure

* [_config.yml](_config.yml) - general settings incl. most frontpage text
* [index.html](index.html) - frontpage layout
* [events/](events/)
  * Each event has its own markdown file. Properties at the top of the file
    are used by the page template to render a map, facebook event link, etc.
  * To add a new event, copy an existing one and change the details. Each file
    is named `yyyy-mm-city.md`.
* [_layouts/default.html](_layouts/default.html) - html template used by every page
* [_layouts/event.html](_layouts/event.html) - layout for event pages
* [_includes/footer.html](_includes/footer.html) - footer for all pages
* [_sass/_base.scss](_sass/_base.scss) - the site's stylesheet


### Editing this site locally

To clone and run a server locally for testing:

    git clone https://github.com/collabcamp/collabcamp.github.io.git
    cd collabcamp.github.io
    gem install jekyll #may need sudo?
    jekyll serve

You should get given a server address like this:

    Server address: http://127.0.0.1:4000/

Please feek free to branch/fork and send pull requests
