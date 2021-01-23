import { ComponentB, tagName } from './component-b'

if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, ComponentB)
}
