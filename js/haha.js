/**
 * Created by WHT on 2019/4/10.
 */
var columns=[
    {"data":"id","title":'公司id'},
    {"data":"cn_name","title":'公司名称'},
    {"data":"regis_address","title":'公司资质'},
    {"data":"regis_date","title":'注册日期'},
    {"data":"setup_date","title":'建立日期'},
];
$('#event_table').DataTable({
    "info":false,//是否显示左下角信息
    "paging":true,//是否开启本地分页
    "processing":true,//是否显示加载中状态
    "searching":false,//是否开启本地搜索
    "serverSide": true,
    ajax:{
        'url':'http://127.0.0.1:3307/user',
        'dataType': 'json',
        'type':'post'
    },
    columns:columns
});