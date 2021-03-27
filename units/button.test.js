// 单元测试
import Vue from 'vue'
import OButton from '../src/components/general/Button.vue'
import chai, { use } from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('OButton', () => {
    it('存在.', () => {
        expect(OButton).to.be.ok
    })

    it('测试icon', () => {
        const Constructor = Vue.extend(OButton)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('.icon')
        expect(useElement.className.trim().split(/\s+/)).to.include('i-settings')
        vm.$destroy()
    })
    it('测试size', () => {
        const Constructor = Vue.extend(OButton)
        const vm = new Constructor({
            propsData: {
                size: 'large'
            }
        }).$mount()
        expect(vm.$el.className.trim().split(/\s+/)).to.include('large')
        vm.$destroy()
    })
    it('测试position,left 时 icon order 为0，right 时 icon order 为 1', () => {
        const oTest = document.createElement('div')
      document.body.appendChild(oTest)
        const Constructor = Vue.extend(OButton)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                position: 'right'
            }
        }).$mount(oTest)
        let {order} = window.getComputedStyle(vm.$el.querySelector('.icon'))
        expect(order).to.eq('1')
        vm.$destroy()
    })
    it('测试disabled', () => {
        const Constructor = Vue.extend(OButton)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.getAttribute('disabled')).to.equal("disabled")
        vm.$destroy()
    })
    it('测试click事件', () => {
        const Constructor = Vue.extend(OButton)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()
        const spy = chai.spy(() => {})
        vm.$on('click', spy)
        vm.$el.click()
        expect(spy).to.have.been.called()
        vm.$destroy()
    })
})