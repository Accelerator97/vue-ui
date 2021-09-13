const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })

    it('接受selected.', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse :selected="xxx">
        <g-collapse-item title="标题1" name="1"><span id="content-1">内容1</span></g-collapse-item>
        <g-collapse-item title="标题2" name="2"><span id="content-2">内容2</span></g-collapse-item>
        <g-collapse-item title="标题3" name="3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>
        `
        const vm = new Vue(
            {
                el: div,
                data: {
                    xxx: ['1', '2']
                }
            }
        )
        setTimeout(() => {
            // console.log(vm.$el)
            expect(vm.$el.querySelector('#content-1')).to.exist
            expect(vm.$el.querySelector('#content-2')).to.exist
            expect(vm.$el.querySelector('#content-3')).to.not.exist
            done()
            vm.$el.remove()
            vm.$destroy
        }, 1000);
    })

    it('可以接受single', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse :selected="xxx" single>
        <g-collapse-item title="标题1" name="1"><span id="content-1">内容1</span></g-collapse-item>
        <g-collapse-item title="标题2" name="2"><span id="content-2">内容2</span></g-collapse-item>
        <g-collapse-item title="标题3" name="3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>
        `
        const vm = new Vue(
            {
                el: div,
                data: {
                    xxx: ['1', '2']
                }
            }
        )
        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(vm.$el.querySelector('#content-1')).to.exist
                expect(vm.$el.querySelector('#content-2')).to.not.exist
                done()
                vm.$el.remove()
                vm.$destroy
            });
        });
    })

    it('触发update:selected事件',(done)=>{
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-collapse :selected="xxx" @update:selected="onSelect">
        <g-collapse-item title="标题1" name="1"><span id="content-1">内容1</span></g-collapse-item>
        <g-collapse-item title="标题2" name="2"><span id="content-2">内容2</span></g-collapse-item>
        <g-collapse-item title="标题3" name="3"><span id="content-3">内容3</span></g-collapse-item>
        </g-collapse>
        `
        const callback = sinon.fake()
        const vm = new Vue(
            {
                el: div,
                data: {
                    xxx: ['1', '2']
                },
                methods:{
                    onSelect:callback
                }
            })
        setTimeout(() => {
            // console.log(vm.$el);
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(callback).to.have.been.called
                done()
                vm.$el.remove()
                vm.$destroy
            });
        });
    })
})