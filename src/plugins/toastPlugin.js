import Toast from '../components/other/Toast'

let curToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(propOptions) {
            if(curToast) {
                curToast.$el.remove()
                curToast.$destroy()
            }
            curToast = createToast(Vue, propOptions)
        }
    }
}

function createToast(Vue, propOptions) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData: propOptions
    })
    toast.$mount()
    document.body.appendChild(toast.$el);
    return toast
}