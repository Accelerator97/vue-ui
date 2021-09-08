import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Content from './content.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
    },
    created(){
        this.$toast('nihao',{
            enableHTML:false,
            position:'middle',
            closeButton:{
                text:'guanbi',
                callback(){
                    console.log('zhidaole');
                }
            }
        })
    },
    methods: {
        showToast(){
            // this.$toast('我是Message')
            // console.log('nihao');
        } 
    }
})



