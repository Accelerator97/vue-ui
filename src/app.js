import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            loading2: true,
        }
    }
})

import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)


 // 单元测试
 {
   const Constructor = Vue.extend(Button)
   const vm = new Constructor({
     propsData: {
       icon: 'settings'
     }
   })
   vm.$mount()
   let useElement = vm.$el.querySelector('use')
   let href = useElement.getAttribute('xlink:href')
   expect(href).to.eq('#icon-settings')
   vm.$el.remove()
   vm.$destroy()
 }
 {
   const Constructor = Vue.extend(Button)
   const vm = new Constructor({
     propsData: {
       icon: 'settings',
       loading: true
     }
   })
   vm.$mount()
   let useElement = vm.$el.querySelector('use')
   let href = useElement.getAttribute('xlink:href')
   expect(href).to.eq('#icon-loading')
   vm.$el.remove()
   vm.$destroy()
 }
 {
   const div = document.createElement('div')
   document.body.appendChild(div)
   const Constructor = Vue.extend(Button)
   const vm = new Constructor({
     propsData: {
       icon: 'settings'
     }
   })
   vm.$mount(div)
   let svg = vm.$el.querySelector('svg')
   let {order} = window.getComputedStyle(svg)
   expect(order).to.eq('1')
   vm.$el.remove()
   vm.$destroy()
 }
 {
   const div = document.createElement('div')
   document.body.appendChild(div)
   const Constructor = Vue.extend(Button)
   const vm = new Constructor({
     propsData: {
       icon: 'settings',
       position: 'right'
     }
   })
   vm.$mount(div)
   let svg = vm.$el.querySelector('svg')
   let {order} = window.getComputedStyle(svg)
   expect(order).to.eq('2')
   vm.$el.remove()
   vm.$destroy()
 }

 {
   // mock
   const Constructor = Vue.extend(Button)
   const vm = new Constructor({
     propsData: {
       icon: 'settings',
     }
   })
   vm.$mount()
   let spy = chai.spy(function(){})
   vm.$on('click',spy)
   // 希望这个函数被执行
   let button = vm.$el
   button.click()
   expect(spy).to.have.been.called()
 }
