
const nav_side_menu = new Vue({
    el: 'nav',
    data: {
        opened: false,

        show_top: true,
        show_which: 'top',
    },
    methods: {
        close_menu() {
            this.opened = false;
        },

        click_return() {
            switch (this.show_which) {
                case 'top': this.close_menu(); return;
                
                case 'import': 
                case 'tools':
                case 'control':
                case 'settings':
                case 'help':
                case 'about':
                this.show_which = 'top'; return;

                case 'address':
                this.show_which = 'tools'; return;

                case 'axis':
                this.show_which = 'settings'; return;

            }
            
        },

        show_import() {
            this.show_which = 'import';
        },

        show_tools() {
            this.show_which = 'tools';
        },

        show_control() {
            this.show_which = 'control';
        },

        show_settings() {
            this.show_which = 'settings';
        },

        show_help() {
            this.show_which = 'help';
        },

        show_about() {
            this.show_which = 'about';
        },

        show_address() {
            this.show_which = 'address';
        },

        show_axis() {
            this.show_which = 'axis';
        },
    },
});

const menu_button = new Vue({
    el: '#side-menu-btn',
    
    methods: {

        open_menu() {
            nav_side_menu.opened = true;
        }
    }
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