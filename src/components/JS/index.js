import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function () {
    var defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    }
    var myComponetn = Vue.extend(MessageBox)

    return function (opts) { // 配置参数
        for (const key in opts) {
            defaults[key] = opts[key]
        }
        var vm = new myComponetn({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.bind(this)()
                    document.body.removeChild(vm.$el)
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.bind(this)()
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})()