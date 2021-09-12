const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  it('接受 autoClose', (done) => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 1,
      }
    }).$mount(div)
    console.log(vm.$el);
    // vm.$on('close', () => {
    //   // console.log(vm.autoClose);
    //   console.log(vm.$el);
    //   expect(document.body.contains(vm.$el)).to.eq(true)
    //   done()
    //   vm.$el.remove()
    //   vm.$destroy();
    //  })
    setTimeout(() => {
      // console.log(this.autoClose);
      console.log(vm.$el);
      expect(document.body.contains(vm.$el)).to.eq(false)
      done()
    }, 1000)
    // vm.$nextTick(() => {
    //   expect(document.body.contains(vm.$el)).to.eq(false)
    //   done()
    // })
  })
  it('接受 closeButton', (done) => {
    const callback = sinon.fake();
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: '关闭吧',
          callback,
        },
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.g-close')
    expect(closeButton.textContent.trim()).to.eq('关闭吧')
    setTimeout(() => {
      closeButton.click()
      expect(callback).to.have.been.called
      done()
    }, 1000);
  })
  it('接受 enableHTML', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: { enableHTML: true }
    })
    vm.$slots.default = ['<strong id="test">hi</strong>']
    vm.$mount()
    let strong = vm.$el.querySelector('#test')
    expect(strong).to.exist
  })
  it('接受 position', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'bottom'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
  })
})