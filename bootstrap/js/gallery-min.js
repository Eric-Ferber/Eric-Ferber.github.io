$(function(){$.fn.imagesLoaded=function(k){var g=this.find("img"),e=g.length,j=this,i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";function h(){k.call(j,g)}function f(){if(--e<=0&&this.src!==i){setTimeout(h);g.off("load error",f)}}if(!e){h()}g.on("load error",f).each(function(){if(this.complete||this.complete===undefined){var l=this.src;this.src=i;this.src=l}});return this};var b=$("#rg-gallery");var d=b.find("div.es-carousel-wrapper");var c=d.find("ul > li");var a=c.length;Gallery=(function(){var i=0,g="carousel",f=false,n=function(){c.add('<img src="img/ajax-loader.gif"/><img src="img/black.png"/>').imagesLoaded(function(){k();m(c.eq(i))});if(g==="carousel"){e()}},e=function(){d.show().elastislide({imageW:65,onClick:function(o){if(f){return false}f=true;m(o);i=o.index()}});d.elastislide("setCurrent",i)},h=function(){var o=$('<a href="#" class="rg-view-full"></a>'),p=$('<a href="#" class="rg-view-thumbs rg-view-selected"></a>');b.prepend($('<div class="rg-view"/>').append(o).append(p));o.on("click.rgGallery",function(q){if(g==="carousel"){d.elastislide("destroy")}d.hide();o.addClass("rg-view-selected");p.removeClass("rg-view-selected");g="fullview";return false});p.on("click.rgGallery",function(q){e();p.addClass("rg-view-selected");o.removeClass("rg-view-selected");g="carousel";return false});if(g==="fullview"){o.trigger("click")}},k=function(){$("#img-wrapper-tmpl").tmpl({itemsCount:a}).appendTo(b);var o=b.find("div.rg-image");o.on("click.rgGallery",function(p){j("right");return false});o.touchwipe({wipeLeft:function(){j("right")},wipeRight:function(){j("left")},preventDefaultEvents:false});$(document).on("keyup.rgGallery",function(p){if(p.keyCode==39){j("right")}else{if(p.keyCode==37){j("left")}}})},j=function(o){if(f){return false}f=true;if(o==="right"){if(i+1>=a){i=0}else{++i}}else{if(o==="left"){if(i-1<0){i=a-1}else{--i}}}m(c.eq(i))},m=function(A){var v=b.find("div.rg-loading").show();c.removeClass("selected");A.addClass("selected");var E=A.find("img");var s=E.data("index");var D=EFGallery[s];var B=D.image;if(B.ext==undefined){B.ext=EFGalleryDefaults.imgDefaultExtension}var C=EFGalleryImagesPath+B.base+"{width}"+B.ext;var u=D.nom+EFGalleryDefaults.imgAltAppendString;var r=D.legende?"<br>"+D.legende:"";var o=D.dimensions?"<br>"+D.dimensions:"";var x=D.materiaux?"<br>"+D.materiaux:"";var y='<a href="#" class="legendTogle"><small>légende</small></a>';var t="<strong>"+D.nom+"</strong>"+r+o+x;var p="img"+s;var w="#"+p;var q='<div id="'+p+'" data-src="'+C+'" data-alt="'+u+'" data-class="img-reponsive"></div>';b.find("div.rg-image").empty().append(q);b.find("div.rg-legend").children("p").empty().html(y);$(".legendTogle").click(function(){var F=$(".rg-caption-wrapper");F.toggle();if(F.is(":visible")){$(this).hide()}return false});$(".rg-caption-close").click(function(){$(".rg-caption-wrapper").hide();$(".legendTogle").show();return false});if($(".rg-caption-wrapper").is(":visible")){$(".legendTogle").hide()}else{$(".legendTogle").show()}t=t.replace(/\"/g,"'");b.find("div.rg-caption").children("p").empty().html(t);v.hide();if(g==="carousel"){d.elastislide("reload");d.elastislide("setCurrent",s)}f=false;if(D.formats==undefined){D.formats=EFGalleryDefaults.imgDefaultFormats}var z=new Imager(w,{availableWidths:D.formats})},l=function(o){d.find("ul").append(o);c=c.add($(o));a=c.length;d.elastislide("add",o)};return{init:n,addItems:l}})();if($("#rg-gallery").length){Gallery.init()}});