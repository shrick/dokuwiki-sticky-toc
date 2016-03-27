// ==UserScript==
// @name            DokuWiki Sticky TOC
// @author          shrick
// @description     Make TOC of DokuWiki sticky and folded up after entry selection
// @include         http*
// @run-at          document-end
// @grant           none
// ==/UserScript==

// make changes after document is loaded
window.addEventListener('load', function() {
    
    var toc = document.getElementById('dw__toc');    
    var toc_inside = toc.getElementsByTagName("div")[0];
    var toc_list = toc_inside.getElementsByTagName("ul")[0];

    // make the whole toc sticky to have it handy always
    toc.style.position = 'fixed';
    toc.style.cssFloat = 'right';
    toc.style.right = '20px';
    toc.style.top = '20px';
    toc.style.position = 'fixed';
    toc.style.background = '#DDDDCC';
    
    // fold up the toc after clicking into it
    toc_inside.setAttribute(
        'onClick',
        'jQuery(function() { var $toc = jQuery("#dw__toc .toggle"); if($toc.length) { $toc[0].setState(-1); } });'
    );
    
    // automatically fold up the toc after 5 seconds
    setTimeout(function() {
        toc_inside.style.display = 'none';
        toc_list.setAttribute('aria-expanded', 'false');
        toc_list.style.display = 'none';
    }, 5000);
    
}, false);

