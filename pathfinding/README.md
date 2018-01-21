I decided to build the carousel in React while on a plane to Hawaii. There is no internet so this could probably use some refactoring. I did it the simplest way I could think of. Some considerations:

1. If loading content of the sliders via AJAX, consider cacheing solutions. I was originally storing the panels in this.panels so as to not rebuild them every time it renders, but rather build only 1 new Panel per slide. Refactored for simplicity, will revisit as necessary.

2. Need to research 'react-transition-group' and see if this would be better than traditional CSS transitions. I got to read about 2 minutes on it but you know...vacation.

3. That's it! This is a very simple implementation of a slider. Going to have to come up with some really interesting uses for it, break it, and make it better.
