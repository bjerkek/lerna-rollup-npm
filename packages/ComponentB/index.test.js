import { ComponentB } from './index'

const componentB = new ComponentB()

// Append to body (to run connectedCallback)
document.body.appendChild(componentB)

describe('ComponentB', () => {
  test('Does it load', () => {
    expect(document.body.innerHTML).toContain('<component-b></component-b>')
  })
})
