import { ComponentA, tagName } from './component-a'

if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, ComponentA)
}
