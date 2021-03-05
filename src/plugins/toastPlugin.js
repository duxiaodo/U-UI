import Toast from '../components/other/Toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(propOptions) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: propOptions
            })
            toast.$mount()
            document.body.appendChild(toast.$el);
        }
    }
}