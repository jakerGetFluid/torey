$(document).foundation(),$(document).ready(function(){function o(){$("#hero h1").addClass("shadow")}setTimeout(o,900),$("#bio .row > .column").hover(function(){$("img.bw",this).hide(),$("img.color",this).show()},function(){$("img.color",this).hide(),$("img.bw",this).show()}),$("#bio .row > .column").click(function(){$(this).next(".column").fadeIn("400")})});
//# sourceMappingURL=./app-min.js.map