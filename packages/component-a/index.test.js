import { ComponentA } from './index'

const componentA = new ComponentA()
document.body.appendChild(componentA) // needed for running connectedCallback

const div = componentA.shadowRoot.querySelector('div')

it('displays ComponentA', () => {
  expect(div.innerHTML.trim()).toBe('It works')
})
