$(".navbar-toggler").click(function(){$(".navbar-toggler-icon").toggleClass("navbar-expanded")});var chevrons=["#lang-selector","#version-select"];chevrons.forEach(function(o,n){$(o).focus(function(){$(o+" > .chevron-down").removeClass("unrotate").addClass("rotate")}),$(o).blur(function(){$(o+" > .chevron-down").removeClass("rotate").addClass("unrotate")})});