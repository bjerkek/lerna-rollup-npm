import { ComponentB } from './index'

const componentB = new ComponentB()
document.body.appendChild(componentB) // needed for running connectedCallback

const div = componentB.shadowRoot.querySelector('div')

it('displays ComponentB', () => {
  expect(div.innerHTML.trim()).toBe('<button>Label</button>')
})
