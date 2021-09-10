const expect = chai.expect;

import Vue from 'vue'
import Tabs from '../src/tabs'
// import TabsHeader from '../src/tabs-header.vue'
// import TabsBody from '../scr/tabs-body.vue'
// import TabsItem from '../scr/tabs-item.vue'
// import TabsPane from '../scr/tabs-pane.vue'

// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)
// Vue.component('g-tabs-header', TabsHeader)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在', () => {
        expect(Tabs).to.be.exist
    })
    
    // it('子组件只能是tabs-header和tabs-body',  ()=>{
    //     const div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.innerHTML = `
    //        <g-tabs>
    //           <div>hi</div>
    //        </g-tabs>
    //     `
    //      expect(()=>{
    //         const vm = new Vue({
    //             el:div
    //         })
    //     }).to.throw()
    // })
})