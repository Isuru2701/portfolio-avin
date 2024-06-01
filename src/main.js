import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'


let app = createApp(App)
app.use(router)
// no tips
// Vue.config.productionTip = false

// Analytics
// app.use(VueAnalytics, {
//     id: 'UA-75833214-1',
//     router
// })

// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/iuri.is-sw.js')
            .then((registration) => {
                //console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                //console.log('SW registration failed: ', registrationError);
            })
    })
}

// instance
app.mount('#app')
