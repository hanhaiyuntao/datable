/**
 * Created by WHT on 2019/4/9.
 */

(function($){
    //$.fn({
    //    "bold":function(){
    //        console.log('进入了');
    //
    //    }
    //});

    $.fn.bold = function(){//多个使用,例如show  $('p').bold();
        return this.css({'font-weight':'bold'})
    };

    $.extend({//多个使用 $.minValue(20,30)
        "minValue": function (a, b) {
            ///<summary>
            /// 比较两个值，返回最小值
            ///</summary>
            return a < b ? a : b;
        }
    });

    $.fn.extend({//实例化对象后添加jquery的成员函数 $("p").alertWhileClick
        alertWhileClick:function() {
            $(this).click(function(){
                alert($(this).val());
            });
        }
    });
})(jQuery);

