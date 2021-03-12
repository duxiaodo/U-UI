// 单元测试
import Vue from 'vue'
import OInput from '../src/components/form/Input'
import chai, { use } from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('OInput', () => {
    it('存在.', () => {
        expect(OInput).to.be.ok
    })

    it('测试value', () => {
        const Constructor = Vue.extend(OInput)
        const vm = new Constructor({
            propsData: {
                value: 'DUing'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('input')
        expect(useElement.value).to.equal("DUing")
        vm.$destroy()
    })
    it('测试type', () => {
        const Constructor = Vue.extend(OInput)
        const vm = new Constructor({
            propsData: {
                type: 'text'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('input')
        console.log(useElement)

        expect(useElement.getAttribute('type')).to.equal("text")
        vm.$destroy()
    })
    it('测试disabled', () => {
        const Constructor = Vue.extend(OInput)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        let useElement = vm.$el.querySelector('input')
        console.log(useElement)

        expect(useElement.disabled).to.equal(true)
        vm.$destroy()
    })
    it('测试readonly', () => {
        const Constructor = Vue.extend(OInput)
        const vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount()
        let useElement = vm.$el.querySelector('input')
        console.log(useElement)

        expect(useElement.getAttribute('readonly')).to.equal("readonly")
        vm.$destroy()
    })
})