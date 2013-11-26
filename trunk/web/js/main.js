$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() > 150){$('#btn_back_top').show();}else{$('#btn_back_top').hide();}});
    tabs(".hd","curr",".bd");
}); 
function addFavorite(url, title) {
    try {
        window.external.addFavorite(url, title);
    } catch(e) {
        try {
            window.sidebar.addPanel(title, url, '');
        } catch(e) {
            alert("请按 Ctrl+D 键添加到浏览器收藏夹");
        }
    }
}
function setHomepage(sURL) {
    try{
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(sURL);
    } catch(e) {
        alert("非 IE 浏览器请手动将本站设为首页");
    }
}
 function tabs(tabTit,on,tabCon){
	$(tabCon).each(function(){
        $(this).children().eq(0).show();
    });
	$(tabTit).each(function(){
        $(this).children().eq(0).addClass(on);
	});
    $(tabTit).children().hover(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
 }