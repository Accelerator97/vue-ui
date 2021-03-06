const expect = chai.expect;
 import Vue from 'vue'
 import Tabs from '../src/tabs'
 import TabsHeader from '../src/tabs-header'
 import TabsBody from '../src/tabs-body'
 import TabsItem from '../src/tabs-item'
 import TabsPane from '../src/tabs-pane'

 Vue.component('g-tabs', Tabs)
 Vue.component('g-tabs-header', TabsHeader)
 Vue.component('g-tabs-body', TabsBody)
 Vue.component('g-tabs-item', TabsItem)
 Vue.component('g-tabs-pane', TabsPane)

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Tabs', () => {

   it('存在.', () => {
     expect(Tabs).to.exist
   })

   it('接受 selected 属性', (done) => {
     const div = document.createElement('div')
     document.body.appendChild(div)
     div.innerHTML = `
       <g-tabs selected="finance">
         <g-tabs-header>
           <g-tabs-item name="woman"> 美女 </g-tabs-item>
           <g-tabs-item name="finance"> 财经 </g-tabs-item>
           <g-tabs-item name="sports"> 体育 </g-tabs-item>
         </g-tabs-header>
         <g-tabs-body>
           <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
           <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
           <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
         </g-tabs-body>
       </g-tabs>
     `
    let vm = new Vue({
       el: div
     })
    let x = vm.$el.querySelector(`.g-tabs-item[data-name="finance"]`)
    setTimeout(() => {
      expect(x.classList.contains('active')).to.eq(true)
      done()
      div.remove()
      vm.$destroy()
    },1000);
  
   })

  //  it('可以接受 direction prop', () => {

  //  })

 }) 
