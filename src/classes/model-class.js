import { css, row, column, form, landing } from "../utils";
 class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options
    }
    toHtml() {
        throw error('Не реализован метод класса')
    }
}

export class BlockTitle extends Block {
    constructor(value, options) {
        super(value, options)
        this.value = value
        this.options = options
    }
    toHtml() {
        return column(this.value, css(this.options.styles))
    }
}

export class BlockText extends Block {
    constructor(value, options) {
        super(value, options)
        this.value = value
        this.options = options
    }
    toHtml() {
       return row(this.value, css(this.options.styles))

    }
}


export class BlockForm extends Block {
    constructor(value, options) {
        super(value, options) 
        this.value = value;
        this.options = options
    }
    toHtml() {
       return form(this.value, css(this.options.styles))
    }
}


export class landBlock extends Block {
    constructor(value, options) {
        super(value, options)
        this.value = value;
        this.options = options;

    }
    toHtml() {
        return landing(this.value, css(this.options.styles))
    }
}