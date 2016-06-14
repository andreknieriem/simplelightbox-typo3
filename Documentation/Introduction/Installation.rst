Installation
^^^^^^^^^^^^

1) Install the extension via Extensionmanager or download the zip file and upload it.
2) Add TypoScript to your template record
	- Go to your root page and click on "**Template**".
	- Choose "**Info/Modify**" in the select above
	- Click on "**Edit the whole template record**"
	- Choose Tab "Includes" and include "**Simplelightbox (simplelightbox)**"

Changing Options
^^^^^^^^^^^^^^^^
plugin.tx_simplelightbox.settings {
	- overlay = 1 
	- spinner = 1 
	- nav = 1
	- navTextPrev = ‹
	- navTextNext = ›
	- captions = 1
	- captionSelector = img
	- captionType = attr
	- captionsData = title
	- captionPosition = bottom
	- captionDelay = 0
	- close = 1
	- closeText = ×
	- swipeClose = 1
	- showCounter = 1
	- fileExt = png|jpg|jpeg|gif
	- animationSpeed = 250
	- animationSlide = 1
	- preloading = 1
	- enableKeyboard = 1
	- loop = 1
	- docClose =1
	- swipeTolerance = 50
	- className = simple-lightbox
	- widthRatio = 0.8
	- heightRatio = 0.9
	- disableRightClick = 0
	- disableScroll = 1
	- alertError  = 1
	- alertErrorMessage = Image not found, next image will be loaded
	- additionalHtml = 

}

The options are the same as they are for the simplelightbox javascript plugin. Boolean values are presented as 0 and 1.
You can see the pluginpage here:
`http://andreknieriem.de/simple-lightbox/ <http://andreknieriem.de/simple-lightbox/>`_