var pairAct = function ( oClass ) {
	'use strict';
	// oClass = {
	// 	button : '',
	// 	buttonIndexRoot : '',
	// 	view : '',
	// 	flag : '',
	// 	init : 0
	// };
	if ( typeof oClass !== 'object') return false;

	if ( !oClass.button || typeof oClass.button !== 'string' ) return false;
	if ( !oClass.view || typeof oClass.view !== 'string' ) return false;
	if ( !oClass.flag || typeof oClass.flag !== 'string' ) return false;
	if ( !oClass.init ) oClass.init = 0;

	// oClass.buttonIndexRoot = ( oClass.buttonIndexRoot ) ? oClass.buttonIndexRoot : oClass.button;
	if ( !oClass.buttonIndexRoot ) oClass.buttonIndexRoot = oClass.button;
	if ( typeof oClass.buttonIndexRoot !== 'string' ) return false;

	var $allButton = $( oClass.button );
	var $allView = $( oClass.view );
	// if ( isRoot ) {
	// 	nButtonIndex = $button.parents( oClass.buttonIndexRoot ).index();
	// } else {
	// 	nButtonIndex = $button.index();
	// }
	var isRoot = ( oClass.buttonIndexRoot !== oClass.button ) ? true : false;
	var init = function () {
		if ( isRoot ) {
			$( oClass.buttonIndexRoot ).eq( oClass.init ).find( oClass.button ).addClass( oClass.flag );
		} else {
			$allButton.eq( oClass.init ).addClass( oClass.flag );
		}
		$allView.eq( oClass.init ).addClass( oClass.flag );
	};

	$allButton.on('click',function () {

		var $button = $(this);
		var nButtonIndex = ( isRoot ) ? $button.parents( oClass.buttonIndexRoot ).index() : $button.index();

		$allButton.removeClass( oClass.flag );
		$button.addClass( oClass.flag );
		$allView.removeClass( oClass.flag ).eq( nButtonIndex ).addClass( oClass.flag );
		event.returnValue = false;
		event.preventDefault();
	});
	init();
};

var oTabMenu = {
	button : '.tab-menu-item',
	buttonIndexRoot : '.tab-menu-group',
	view : '.tab-content-group',
	flag : 'is-active'
};

pairAct( oTabMenu );