const expect = chai.expect;
 import Vue from 'vue'
 import Row from '../src/row'
 import Col from '../src/col'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Row', () => {
     it('存在.', () => {
         expect(Row).to.be.ok
     })
   
     it('可以接受gutter.', (done) => {
         Vue.component('g-row',Row)
         Vue.component('g-col',Col)
         const div = document.createElement('div')
         document.body.appendChild(div)
         div.innerHTML = `
            <g-row gutter="20">
               <g-col span="12"></g-col>
               <g-col span="12"></g-col>
            </g-row>
         `
         const vm = new Vue({
            el:div
         })
        setTimeout(() => {
            const row = vm.$el.querySelector('.g-row')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            const cols = vm.$el.querySelectorAll('.g-col')
            // console.log(cols);
            expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.equal('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 1000);
     })

     it('可以接受align.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'center'
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).justifyContent).to.equal('center')
        vm.$el.remove()
        vm.$destroy()
    })
   
 })