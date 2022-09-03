import { BlockForm, BlockText, BlockTitle, landBlock } from "./classes/model-class";

export function css(styles) {
    if(typeof styles === 'string') {return styles}
    const arrayStyles = Object.entries(styles)
    const finallArray = [];
    for(const [key, value] of arrayStyles) {
        finallArray.push(`${key}: ${value}`)
    }
    return finallArray.join(';')
}

export function row(content, styles='') {
    return `<div class="row" name="text" style='${styles}'>${content}</div>`
}

export function img(content, styles = '') {
    return `<img src="${content}" style="${styles}" alt="">`
}

export function column(content, styles='') {
    return `<div class="column" name="text" style='${styles}'>${content}</div>`
} 

export function form(content, styles='') {
    return `
    <form name="${content}" class="form__wrapper" style="${styles}">
    <h5>example of type: text, title, form, land, </h5>
            <div class="form-group">
                <input class="form-input input-third" name="type" placeholder="typeof block">
            </div>
            <div class="form-group">
            <h5>any type of text</h5>
                <input class="form-input input-first" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <h5>example of styles: color:green;</h5>
                <input class="form-input input-second" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn">SEND</button>
    </form>
    `
}

export function landing(content, styles = '') {
    return `
    <div class="land__wrapper" style="${styles}">
        <h5>${content}</h5>
        <p class="land-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati in adipisci vero laboriosam doloremque magni nostrum cum ipsa iste vel soluta sit natus eius corrupti, aspernatur amet voluptates porro.</p>
        <div class="blob-effect">
        <span></span>
        <span></span>
        <span></span>
        <button class="land-button">learn more</button>
   </div>
        
    </div>
    `
}

export function render(model, entryPoint) {
    model.forEach((block) => {
        entryPoint.insertAdjacentHTML("beforeend",block.toHtml())
    })
    entryPoint.addEventListener('submit', (e) => {
        e.preventDefault()
       const type = e.target.type.value 
       const value = e.target.value.value;
       const styles = e.target.styles.value;
       if(type === 'text') {
        model.push(new BlockText(value, {styles}))
        entryPoint.insertAdjacentHTML("beforeend",model[model.length - 1].toHtml())
       }else if(type === 'title') {
        model.push(new BlockTitle(value, {styles}))
        entryPoint.insertAdjacentHTML("beforeend",model[model.length - 1].toHtml())
       }else if(type === 'form') {
        model.push(new BlockForm(value, {styles}))
        entryPoint.insertAdjacentHTML("beforeend",model[model.length - 1].toHtml())
       }else if(type === 'land') {
        model.push(new landBlock(value, {styles}))
        entryPoint.insertAdjacentHTML("beforeend",model[model.length - 1].toHtml())
       }
    })

}