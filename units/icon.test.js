// 单元测试
import Vue from 'vue'
import Icon from '../src/components/general/Icon'
import chai, { use } from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Icon', () => {
    it('存在.', () => {
        expect(Icon).to.be.ok
    })

    it('测试icon type', () => {
        const Constructor = Vue.extend(Icon)
        const vm = new Constructor({
            propsData: {
                type: 'settings'
            }
        }).$mount()
        expect(vm.$el.className.trim().split(/\s+/)).to.include('i-settings')
        vm.$destroy()
    })

    it('测试icon size', () => {
        const Constructor = Vue.extend(Icon)
        const vm = new Constructor({
            propsData: {
                size: 'large'
            }
        }).$mount()
        expect(vm.$el.className.trim().split(/\s+/)).to.include('large')
        vm.$destroy()
    })
})