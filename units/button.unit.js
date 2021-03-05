// 单元测试
import Vue from 'vue'
import OButton from '../src/components/general/Button'
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('OButton', () => {
    it('存在.', () => {
        expect(OButton).to.be.ok
    })
})