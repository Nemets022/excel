import { ExcelComponent } from '../../core/ExelComponent'
import { createTable } from './table.template'
import { resizeHandler } from './table.resize'
import { shoulResize } from './table.functions'

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable()
    }

    onMousedown(event) {
        if (shoulResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
}