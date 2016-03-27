// ==UserScript==
// @name          DokuWiki Sticky TOC
// @author        shrick
// @description   Make TOC of DokuWiki sticky and folded up after entry selection
// @include       *
// ==/UserScript==


var toc = undefined;
var toc_inside = undefined;
var toc_list = undefined;

// fold up the toc (the toc must not be fold up before)
function foldup_toc() {
  toc_inside.style.display = 'none';
  toc_list.setAttribute('aria-expanded', 'false');
  toc_list.style.display = 'none';
}

// fold up the toc after selecting an entry
function make_toc_autofoldedup() {
  toc_inside.setAttribute(
    'onClick',
    'jQuery(function() { var $toc = jQuery("#dw__toc .toggle"); if($toc.length) { $toc[0].setState(-1); } });'
  );
}

// make the whole toc sticky to have it handy always
function make_toc_sticky() {
  toc.style.position = 'fixed';
  toc.style.cssFloat = 'right';
  toc.style.right = '20px';
  toc.style.top = '20px';
  toc.style.position = 'fixed';
  toc.style.background = '#DDDDCC';
}

// make all the changes:
// - make the toc sticky
// - fold it up after selecting an entry
// - fold it up initially
function doit() {
  toc = document.getElementById('dw__toc');    
  toc_inside = toc.getElementsByTagName("div")[0];
  toc_list = toc_inside.getElementsByTagName("ul")[0];

  make_toc_sticky();
  make_toc_autofoldedup();
  setTimeout(foldup_toc, 5000); // after 5 seconds
}

// make changes not before document is loaded
window.addEventListener('load', doit, true);
