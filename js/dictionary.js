/**
 * Created by WHT on 2019/3/15.
 */
var height = $(window).height() - $("#nav").height() - 30;
$(".row").height(height);
window.onresize = function(){
    var height = $(window).height() - $("#nav").height() - 10;
    $(".row").height(height);
}
