const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {
    it('存在', () => {
        expect(CollapseItem).to.exist
    })

    it('可以接受title、name', () => {
        const Constructor = Vue.extend(CollapseItem)
        const vm = new Constructor({
           propsData:{
               title:'helloworld',
               name:'xb'
           }
        }).$mount()
        const title = vm.$el.querySelector('.g-collapse-title')
        expect(title.innerText.trim()).to.eq('helloworld')
        expect(title.getAttribute('data-name')).to.eq('xb')
    })
})