import { capitalize } from './utils'

export class DomListener {
    constructor($root, listeners = [], name) {
        if (!$root) {
            throw new Error(`No root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
        this.name = name
    }
    initDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            const name = this.name || ''
            console.log(name);
            if (!this[method]) {
                throw new Error(
                    `Method ${method} is not implimented in ${name} Component`
                     )
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }
    removeDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}