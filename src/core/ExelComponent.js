import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners, options.name)
    }

    toHTML() {
        return ''
    }

    init() {
        this.initDomListener()
    }

    destroy() {
        this.removeDomListener()
    }
}