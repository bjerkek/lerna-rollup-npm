import HTMLTemplate from './template.html'

const template = document.createElement('template')
template.innerHTML = HTMLTemplate

export const tagName = 'component-b'

export class ComponentB extends HTMLElement {
  #shadowRoot: ShadowRoot
  constructor () {
    super()
    this.#shadowRoot = this.attachShadow({ mode: 'open' })
    this.#shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
