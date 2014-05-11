// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require freewall
//= require_tree .

$(document).ready(function(){


    var wall = new freewall("#freewall");
    wall.reset({
        selector: '.item',
        animate: true,
        cellW: 250,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    var images = wall.container.find('.item');
    var length = images.length;
    images.css({visibility: 'hidden'});
    images.find('img').load(function() {
        -- length;
        if (!length) {
            setTimeout(function() {
                images.css({visibility: 'visible'});
                wall.fitWidth();
            }, 505);
        }
    });





});

