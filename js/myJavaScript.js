window.onload = function() {
  $("html").css("scroll-behavior", "auto");
  $("html,body").animate({scrollTop: 0}, 1);
  $("html").css("overflowY", "hidden");
}
$(document).ready(function(){
  // var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  // var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var aboutMe = Snap("#aboutMe");
  var sinText = Snap("#sinText");
  var s = Snap("#continue_Button");
  var red = Snap("#red");
  var orange = Snap("#orange");
  var yellow = Snap("#yellow");
  var green = Snap("#green");
  var blue = Snap("#blue");
  var indigo = Snap("#indigo");
  var violet = Snap("#violet");
  var black = Snap("#black");
  var white = Snap("#white");
  var navBar = Snap("#navBar");

  // Circle with 10px radius
  var circle = s.circle("50vmax", "50vmax", "200vmax");

  var sinTextBubble = sinText.rect(0,0,3000,"5vw");
  var sinTextText = sinText.text("38.5%","68%","wrath.");
  var redBubble = red.circle(10,10,100);
  var redRect2 = s.rect("0%","-200%","200%","100%");
  var redRect = s.rect("0%","60%","200%","100%");

  var navBanner = navBar.rect(0, 0, "100%", "100%");
  var navBannerText = navBar.text("45%","20%","Moods.");
  var navBannerText2 = navBar.text("45%","30%","wrath.");
  var bannerRect = navBar.rect(0,"23%","60%","5px");

  var orangeBubble = orange.circle(10,10,100);
  var orangeRect2 = s.rect("100.7vw", "41%", "0.5vw", "0%");
  var orangeRect = s.rect("100.7vw", "41%", "0.5vw", "0%");

  var yellowBubble = yellow.circle(10,10,100);
  var greenBubble = green.circle(10,10,100);
  var blueBubble = blue.circle(10,10,100);
  var indigoBubble = indigo.circle(10,10,100);
  var violetBubble = violet.circle(10,10,100);
  var blackBubble = black.circle(10,10,100);
  var whiteBubble = white.circle(10,10,100);
  var aboutMeBubble = aboutMe.circle(10,10,100);
  var aboutMeText = aboutMe.text("50%","62%","About Me");



  sinTextBubble.attr({
    fill:"#A92828",
    opacity:0,
  });
  sinTextText.attr({
    fill:"#FFFFFF",
    fontSize:"3vw",
    fontFamily:"Phenomena",
    textAnchor:"middle",
    letterSpacing:"0.15em",
    opacity:0,
    pointerEvents: "none",
  });

  navBanner.attr({
    fill: "#FFDBDB",
  });
  navBannerText.attr({
    fill:"#A92828",
    fontSize:"2vw",
    fontFamily:"Manrope-Bold",
    textAnchor:"middle",
    opacity:0,
    pointerEvents: "none",
  });
  bannerRect.attr({
    fill:"#A92828",
    opacity:1,
  });
  navBannerText2.attr({
    fill:"#A92828",
    fontSize:"1.5vw",
    fontFamily:"Manrope-Regular",
    textAnchor:"middle",
    opacity:0,
    pointerEvents: "none",
  });

  circle.attr({
    fill: "#e8f0ff",
    opacity: "0",
  });
  circle.animate({
    opacity: "1",
  }, 1500);

  redBubble.attr({
    fill: "#A92828",
    opacity: "1",
  });
  redRect.attr({
    opacity: "0",
    transform: "rotate(60deg)",
    transformOrigin: "50% 50%",
    fill: "#FFA0A0",
  })
  redRect2.attr({
    opacity: "0",
    transform: "rotate(60deg)",
    transformOrigin: "50 50%",
    fill: "#FFDBDB",
  })

  orangeBubble.attr({
    fill: "#EF820D",
    opacity: "1",
  });
  orangeRect.attr({
    fill: "#FFD8AE",
    opacity: "1",
  });
  orangeRect2.attr({
    fill: "#FFC282",
    opacity: "1",
  });

  yellowBubble.attr({
    fill: "#EAAB2E",
    opacity: "1",
  });

  greenBubble.attr({
    fill: "#4C7632",
    opacity: "1",
  });

  blueBubble.attr({
    fill: "#4453A8",
    opacity: "1",
  });

  indigoBubble.attr({
    fill: "#614177",
    opacity: "1",
  });

  violetBubble.attr({
    fill: "#C1439E",
    opacity: "1",
  });

  blackBubble.attr({
    fill: "#020429",
    opacity: "1",
  });

  whiteBubble.attr({
    fill: "#f0efe6",
    opacity: "1",
  });

  aboutMeBubble.attr({
    fill: "#020429",
    opacity:1,
  });

  aboutMeText.attr({
    fill:"#FFFFFF",
    fontSize:"0.8vmin",
    fontFamily: "Manrope-Bold",
    textAnchor:"middle",
  });


  var font_settings = "<style type='text/css'> \n"+
      "@font-face {font-family: Squad; src: url('./js/fonts/Squad/Squad-Regular.otf');} \n" +
      "@font-face {font-family: Baron; src: url('./js/fonts/Baron/BaronNeue-Regular.otf');} \n" +
      "@font-face {font-family: Bukhari; src: url('./js/fonts/Bukhari/BukhariScript-Regular.otf');} \n" +
      "@font-face {font-family: ColorTube; src: url('./js/fonts/ColorTube/ColorTube-Regular.otf');} \n" +
      "@font-face {font-family: BloggerMediumItalic; src: url('./js/fonts/Blogger/Blogger Sans-Medium Italic.otf');} \n" +
      "@font-face {font-family: BloggerBoldItalic; src: url('./js/fonts/Blogger/Blogger Sans-Bold Italic.otf');} \n" +
      "@font-face {font-family: Phenomena; src: url('./js/fonts/Phenomena/Phenomena-Regular.otf');} \n" +
      "@font-face {font-family: Manrope-Regular; src: url('./js/fonts/Manrope/manrope-regular.otf');} \n" +
      "@font-face {font-family: Manrope-Bold; src: url('./js/fonts/Manrope/manrope-bold.otf');} \n" +
      "@font-face {font-family: Ginga; src: url('./js/fonts/Ginga/Ginga.ttf');} \n" +
      "@font-face {font-family: Hagin; src: url('./js/fonts/Hagin/HaginCapsMedium-Medium.otf');} \n" +
      "</style>";
  $("head").append(font_settings);

  var cubicBezier = function(x1, y1, x2, y2, epsilon){
  	var curveX = function(t){
  		var v = 1 - t;
  		return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
  	};
  	var curveY = function(t){
  		var v = 1 - t;
  		return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
  	};
  	var derivativeCurveX = function(t){
  		var v = 1 - t;
  		return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
  	};
  	return function(t){

  		var x = t, t0, t1, t2, x2, d2, i;

  		// First try a few iterations of Newton's method -- normally very fast.
  		for (t2 = x, i = 0; i < 8; i++){
  			x2 = curveX(t2) - x;
  			if (Math.abs(x2) < epsilon) return curveY(t2);
  			d2 = derivativeCurveX(t2);
  			if (Math.abs(d2) < 1e-6) break;
  			t2 = t2 - x2 / d2;
  		}

  		t0 = 0, t1 = 1, t2 = x;

  		if (t2 < t0) return curveY(t0);
  		if (t2 > t1) return curveY(t1);

  		// Fallback to the bisection method for reliability.
  		while (t0 < t1){
  			x2 = curveX(t2);
  			if (Math.abs(x2 - x) < epsilon) return curveY(t2);
  			if (x > x2) t0 = t2;
  			else t1 = t2;
  			t2 = (t1 - t0) * .5 + t0;
  		}

  		// Failure
  		return curveY(t2);

  	};

  };
// box-shadow:0 0 0 1600px rgba(0,0,0,0.65);
  var epsilon_redRect1 = (1000 / 60 / 600) / 4;
  var epsilon_redRect2 = (1000 / 60 / 800) / 4;
  var easein_Circ_redRect1 = cubicBezier(0.55, 0.055, 0.675, 0.19, epsilon_redRect1);
  var easein_Circ_redRect2 = cubicBezier(0.55, 0.055, 0.675, 0.19, epsilon_redRect2);

  var epsilon_orangeRectGrow = (1000 / 60 / 1000) / 4;
  var epsilon_orangeRect2_1 = (1000 / 60 / 600) / 4;
  var epsilon_orangeRect1 = (1000 / 60 / 300) / 4;
  var epsilon_orangeRect2_2 = (1000 / 60 / 300) / 4;
  var easeout_Cubic_orangeRect1 = cubicBezier(0.215, 0.61, 0.355, 1, epsilon_orangeRect1);
  var easeout_Cubic_orangeRectGrow = cubicBezier(0.215, 0.61, 0.355, 1, epsilon_orangeRectGrow);
  var easeout_Cubic_orangeRect2_1 = cubicBezier(0.215, 0.61, 0.355, 1, epsilon_orangeRect2_1);
  var easein_Quint_orangeRect2_2 = cubicBezier(0.55, 0.055, 0.675, 0.19, epsilon_orangeRect2_2);



  navBanner.click(function(){
    $(".st1").css("fill", "transparent");
    $(".navBar").animate({
      opacity:0,
    }, 500);
    $(".continueButton").animate({
      top:"70%",
      left:"49vw",
    }, 800);
    // $(".sin").css("position", "fixed");
    // $(".sin").css("top", "calc(33vh + 7.6vw + 100vh + 30vh)");
    $(".sin").animate({
      left:"-10%",
    }, 800);
    // $(".cryptic_quote").css("position", "fixed");
    $(".cryptic_quote").animate({
      left:"0",
    }, 800);
    // $(".absoluteBubbleGrid").css("position", "fixed");
    $(".absoluteBubbleGrid").animate({
      left:"0",
    }, 800);
    setTimeout(function(){
      $("html").css("background-color", circle.attr("fill"));
    }, 600);
    $(".blog").animate({
      opacity:0,
    }, 650);
  });
  redBubble.hover(function(){
    // $("#sinText").animate({
    //   boxShadow: "0 0 0 1000px rgba(0,0,0,0.65)",
    // }, 150);
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"wrath.",
      x:"39.3%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#A92828",
      opacity:1,
    }, 300);

    // this.paper.append(this);
  }, function(){
    // $("#sinText").animate({
    //   boxShadow: "0 0 0 0px rgba(0,0,0,0.65)",
    // }, 150);
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);

  });
  redBubble.click(function(){
    s.append(redRect2);
    s.append(redRect);

    $(".blogTitle").html("Wrath.");
    navBannerText.attr({
      fill: "#A92828",
    });
    navBannerText2.attr({
      text: "wrath.",
      fill: "#A92828",
    });
    navBanner.attr({
      fill:"#FFDBDB",
    });
    bannerRect.attr({
      fill:"#A92828",
    });


    redRect.attr({
      opacity:"1",
    });
    redRect2.attr({
      opacity:"1",
    });
    redRect.animate({
      y:"-15%",
    }, 400, easein_Circ_redRect1);
    setTimeout(function(){
      redRect2.animate({
        y:"-110%",
      }, 600, easein_Circ_redRect2);
    }, 100);
    setTimeout(function(){
      $("html").css("background-color", "#FFDBDB");
    }, 400);
    // "calc(39.99vh - 21.5vw)"
    $(".emotions").css("position", "fixed");
    $(".emotions").css("bottom", "3vh");
    $(".emotions").css("left", "0");
    // $(".emotions").css("marginTop", );
    $(".blog").css("height", "130%");

    // slides everything left.
    setTimeout(function(){
      $(".continueButton").animate({
        top:"50%",
        left:"-100vw",
      }, 800);
      // $(".sin").css("position", "fixed");
      // $(".sin").css("top", "calc(33vh + 7.6vw + 100vh + 30vh)");
      $(".sin").animate({
        left:"-130vw",
      }, 800);
      // $(".cryptic_quote").css("position", "fixed");
      $(".cryptic_quote").animate({
        left:"-100vw",
      }, 800);
      // $(".absoluteBubbleGrid").css("position", "fixed");
      $(".absoluteBubbleGrid").animate({
        left:"-100vw",
      }, 800);
    }, 1000);
    setTimeout(function(){
      $("html").css("background-color", "#f0efe6");
    }, 1150);
    setTimeout(function(){
      $(".st1").css("fill", "#021633");
      $(".nav").css("opacity", "1");
      navBar.animate({
        opacity:"1",
      }, 300);
      navBannerText.animate({
        opacity:"1",
      }, 500);
      $(".blog").animate({
        opacity:1,
      }, 500);
    }, 1500);
    setTimeout(function(){
      circle.attr({
        fill:"#FFDBDB",
      });
      redRect.attr({
        opacity:"0",
        y: "60%",
      });
      redRect2.attr({
        opacity:"0",
        y: "-270%",
      });
    }, 2000);
  });


  orangeBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"gluttony.",
      x:"52.6%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#EF820D",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });




  orangeBubble.click(function(){
    $(".blogTitle").html("Gluttony.");
    navBannerText.attr({
      fill: "#EF820D",
    });
    navBannerText2.attr({
      text: "gluttony.",
      fill: "#EF820D",
    });
    navBanner.attr({
      fill:"#FFD8AE",
    });
    bannerRect.attr({
      fill:"#EF820D",
    });

    orangeRect.animate({
      height:"100%",
      y:0,
    }, 500, easeout_Cubic_orangeRectGrow);
    orangeRect2.animate({
      height:"100%",
      y:0,
    }, 500, easeout_Cubic_orangeRectGrow);
    setTimeout(function(){
      orangeRect.animate({
        width:"45vw",
        x:"78.45vw",
      }, 300, easeout_Cubic_orangeRect1);
    }, 500);
    setTimeout(function(){
      orangeRect2.animate({
        width:"100vw",
        x:"50.95vw",
      }, 600, easeout_Cubic_orangeRect2_1)
    }, 800);
    setTimeout(function(){
      $("html").css("background-color", "#FFC282");
    }, 1300);
    setTimeout(function(){
      orangeRect.animate({
        width:"100vw",
        x:"50.95vw",
      }, 300, easein_Quint_orangeRect2_2);
    }, 1300);
    setTimeout(function(){
      $("html").css("background-color", "#FFD8AE");
      circle.attr({
        fill:"#FFD8AE",
      });
    }, 1600);
    // slides everything left.
    setTimeout(function(){
      $(".continueButton").animate({
        top:"50%",
        left:"-100vw",
      }, 800);
      // $(".sin").css("position", "fixed");
      // $(".sin").css("top", "calc(33vh + 7.6vw + 100vh + 30vh)");
      $(".sin").animate({
        left:"-130vw",
      }, 800);
      // $(".cryptic_quote").css("position", "fixed");
      $(".cryptic_quote").animate({
        left:"-100vw",
      }, 800);
      // $(".absoluteBubbleGrid").css("position", "fixed");
      $(".absoluteBubbleGrid").animate({
        left:"-100vw",
      }, 800);
    }, 2050);
    setTimeout(function(){
      $("html").css("background-color", "#f0efe6");
    }, 2150);
    setTimeout(function(){
      $(".st1").css("fill", "#021633");
      $(".nav").css("opacity", "1");
      navBar.animate({
        opacity:"1",
      }, 300);
      navBannerText.animate({
        opacity:"1",
      }, 500);
      $(".blog").animate({
        opacity:1,
      }, 500);
    }, 2550);
    setTimeout(function(){
      orangeRect2.attr({
          x: "100.7vw",
          y: "41%",
          width: "0.5vw",
          height: "0%",
      });
      orangeRect.attr({
          x: "100.7vw",
          y: "41%",
          width: "0.5vw",
          height: "0%",
      });
    }, 2750);
  });






  yellowBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"greed.",
      x:"65.4%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#EAAB2E",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  greenBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"envy.",
      x:"71.7%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#4C7632",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  blueBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"sloth.",
      x:"59%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#4453A8",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  indigoBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"pride.",
      x:"46.1%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#614177",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  violetBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"lust.",
      x:"32.9%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#C1439E",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  blackBubble.hover(function(){
    sinTextText.attr({
      fill:"#FFFFFF",
      text:"anxiety.",
      x:"39.3%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#020429",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  aboutMeBubble.hover(function(){
    sinTextText.attr({
      text:"About Me. / Archive.",
      fill:"#FFFFFF",
      x:"52.6%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#020429",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  aboutMeText.hover(function(){
    sinTextText.attr({
      text:"About Me. / Archive.",
      fill:"#FFFFFF",
      x:"52.6%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#020429",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
  whiteBubble.hover(function(){
    $("#sinText").animate({
      boxShadow: "0 0 0 5px rgba(2,4,41,1)",
    }, 300);
    sinTextText.attr({
      text:"Doragon Comics",
      fill:"#020429",
      x:"65.4%",
    });
    sinTextText.animate({
      opacity:1,
    }, 300);
    sinTextBubble.animate({
      fill:"#f0efe6",
      opacity:1,
    }, 300);
    // this.paper.append(this);
  }, function(){
    $("#sinText").animate({
      boxShadow: "0 0 0 0px rgba(0,0,0,0.65)",
    }, 300);
    sinTextText.animate({
      opacity:0,
    }, 300);
    sinTextBubble.animate({
      opacity:0,
    }, 300);
  });
});
