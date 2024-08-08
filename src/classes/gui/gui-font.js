var isFontLoaded = false


var Font = new FontFace('PressStart2PFont', 'url(assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf)');
Font.load().then(function(font){
  document.fonts.add(font);
  isFontLoaded = true;
});