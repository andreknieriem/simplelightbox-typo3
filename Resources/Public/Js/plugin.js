
$(function(){
	if (typeof simplelightboxOptions != 'undefined'){
		$('.simpleLightboxImg').simpleLightbox({
			overlay: 		(simplelightboxOptions.overlay == '1') ? true : false,
			spinner: 		(simplelightboxOptions.spinner == '1') ? true : false,
			nav: 			(simplelightboxOptions.nav === '1') ? true : false,
			navText:		[simplelightboxOptions.navTextPrev,simplelightboxOptions.navTextNext],
			captions:		(simplelightboxOptions.captions === '1') ? true : false,
			captionSelector:simplelightboxOptions.captionSelector,
			captionType: 	simplelightboxOptions.captionType,
			captionsData:	simplelightboxOptions.captionData,
			captionPosition:simplelightboxOptions.captionPosition,
			captionDelay:	simplelightboxOptions.captionDelay,
			close:			(simplelightboxOptions.close === '1') ? true : false,
			closeText:		simplelightboxOptions.closeText,
			swipeClose:		(simplelightboxOptions.swipeClose === '1') ? true : false,
			showCounter:	(simplelightboxOptions.showCounter === '1') ? true : false,
		 	fileExt:		(simplelightboxOptions.fileExt == 'false') ? false : simplelightboxOptions.fileExt,
		 	animationSpeed:	parseInt(simplelightboxOptions.animationSpeed,10),
		 	animationSlide:	(simplelightboxOptions.animationSlide === '1') ? true : false,
		 	preloading:		(simplelightboxOptions.preloading === '1') ? true : false,
		 	enableKeyboard:	(simplelightboxOptions.enableKeyboard === '1') ? true : false,
		 	loop:			(simplelightboxOptions.loop === '1') ? true : false,
		 	docClose: 	 	(simplelightboxOptions.docClose === '1') ? true : false,
		 	swipeTolerance: parseInt(simplelightboxOptions.swipeTolerance,10),
		 	className:		simplelightboxOptions.className,
		 	widthRatio: 	simplelightboxOptions.widthRatio,
		 	heightRatio: 	simplelightboxOptions.heightRatio,
		 	disableRightClick:	(simplelightboxOptions.disableRightClick == '1') ? true : false,
		 	disableScroll:		(simplelightboxOptions.disableScroll == '1') ? true : false,
		 	alertError: 	(simplelightboxOptions.alertError == '1') ? true : false,
		 	alertErrorMessage: simplelightboxOptions.alertErrorMessage
		});
	} else {
		$('.simpleLightboxImg').simpleLightbox();
	}
});
