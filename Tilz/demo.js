/* TILZ DEMO
==========================================================================================*/

var tilzSize=70;//dimension of 1 square tile in px
var gutter=4;//spacing between tiles in px
var sizeOfTilesX=2;//maximum tile size X
var sizeOfTilesY=4;//maximum tile size Y

var item="tilz-item";
var container="container-tilz";

var html="<style>";
html+=".container-tilz,.container-tilz-percent {"+
	"position:relative;"+
	"background:none;"+
	"margin: 0 auto;"+
	"width: 100%;"+
"}"+

".tilz-item {"+
	"opacity: 1;"+
	"float: left;"+
	"background-color: #fff;"+
	"box-shadow: inset 0 -5px 0 rgba(0,0,0,0.3);"+
"}";

//TILZ CSS CLASSES BY SIZE----------------------

for (var i=1;i<=sizeOfTilesX;i++) {
	for (var j=1;j<=sizeOfTilesY;j++) {
		html += ".tilz-"+i+"x"+j+" {"+
		
		"width:"+(i*(gutter + tilzSize) - gutter)+"px;"+
		"height:"+(j*(gutter + tilzSize) - gutter)+"px;"+
		
		"}";
	}
}

html += "</style>";//END OF CSS STYLES ------
document.write(html);