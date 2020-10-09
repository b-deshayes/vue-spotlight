import Vue from 'vue'

import Spotlight from './Spotlight/Spotlight'

const Components = {
    Spotlight,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
