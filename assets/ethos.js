jQuery( document ).ready( function(){

	var DEBUG = false;
	
	var $body = jQuery( 'body' ) 
	var $window = jQuery( '#window' );
	var $nav = jQuery( '#nav-bar' );
	var $url = $nav.find( '.url' );
	var $debug = jQuery( '#debug-output');

	if (DEBUG) {
		$body.addClass('debug')
	}

	var DEFAULTS = {
		namereg: 'defaults/namereg.html',
		dox: 'defaults/dox.html',
		home: 'defaults/home.html'
	}

	$nav.find('.submit').click( handleClickGo );
	$nav.find('.home').click( handleClickHome );
	$window.on( 'load', updateUrlBar );
	$nav.on( 'submit', handleClickGo );

	function getAddressForName (name) {
		// eth.getStorageAt( 'NameReg', name )
		return;
	}

	function getTorrentHashForAddress (address) {
		// eth.getStorageAt( 'TH', name )
		return;
	}

	function getIPForAddress (address) {
		// eth.getStorageAt( 'IP', name )
		return;
	}

	function getDomainForUrl (url) {
		var link = document.createElement( 'A' );
		return link.host + ':' + link.port;
	}

	function formatUrl (url, custom) {
		var link = document.createElement( 'A' );
		link.href = url;

		console.log( 'formatting: ', link.href );

		if ( custom ){
			return link.href;
		} else {
			return link.host + link.pathname + link.search + link.hash;	
		}
		
	}

	function handleClickGo (ev) {
		ev.preventDefault();	
		var url 	= $url.val();
		var domain 	= getDomainForUrl( url );
		var address = getAddressForName( domain );
		
		if (address) {
			var th = getTorrentHashForAddress( address );
			var ip = getIPForAddress( address );
			navigateTo( url );
		} else {
			navigateTo( url, true );
		}
			
		return false
	}

	function handleClickHome (ev) {
		ev.preventDefault();
		navigateTo( 'home' );
		return false;	
	}

	function navigateTo (url) {
		if (defaultUrl( url )) {
			$window.attr( 'src', defaultUrl( url ) );
			$url.val( url );
		} else {
			$window.attr( 'src', url );
			updateUrlBar();
			debugOutput( url );	
		}
	}

	function updateUrlBar () {
		var src = $window.attr( 'src' );
		console.log( src );
		$url.val( formatUrl( src ) );
	}

	function defaultUrl (url) {
		return DEFAULTS[ url.toLowerCase() ];
	}

	function debugOutput (content) {
		if (DEBUG) $debug.append( jQuery("<div>"+content+"</div>") );
	}
});
