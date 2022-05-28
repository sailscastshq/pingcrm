import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import '../css/app.css'
import dashboard from './layouts/dashboard'

InertiaProgress.init()

createInertiaApp({
  title: (title) => (title ? `${title} - Ping CRM` : 'Ping CRM'),
  resolve: (name) => {
    const page = require(`./pages/${name}`).default
    page.layout = typeof page.layout !== 'undefined' ? page.layout : dashboard
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({
      render: () => h(App, props)
    })
      .use(plugin)
      .mount(el)
  }
})
