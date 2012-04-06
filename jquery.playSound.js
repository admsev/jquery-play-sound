/**
 * @author Alexander Manzyuk <admsev@gmail.com>
 * Copyright (c) 2012 Alexander Manzyuk - released under MIT License
 * https://github.com/admsev/jquery-play-sound
 * Usage: $.playSound('http://example.org/sound.mp3');
*/

$(function(){
  $('body').append('<span id="playSound"></span>');

  $.extend({
    playSound: function(){
      $('#playSound').html("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false'>");
    }
  });

});
