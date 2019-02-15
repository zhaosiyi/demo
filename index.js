
let main_menu = new Vue({
    el: '#main-menu',
    data: {
        show_import: false,
        show_tools: false,
        show_control: false,
        show_settings: false,
        show_help: false,
        show_about: false,
        show_listen_address: false,
        show_set_axis: false,
    },
    methods: {
        
    },
});

// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
mapTypes:[
    BMAP_NORMAL_MAP,
   // BMAP_HYBRID_MAP
]}));	  
map.centerAndZoom('西安',11);      // 用城市名设置地图中心点
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放