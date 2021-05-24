import { App } from 'vue'
import { NavBar,Button } from 'vant'

const plugins = [NavBar,Button]

const vant = {
    install: function (app: App<Element>) {
        plugins.forEach(item => {
            app.component(item.name, item)
        })
    }
}

export default vant
