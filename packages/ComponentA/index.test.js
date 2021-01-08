import { ComponentA } from './index'

const componentA = new ComponentA()

// Append to body (to run connectedCallback)
document.body.appendChild(componentA)

describe('ComponentA', () => {
  test('Does it load', () => {
    expect(document.body.innerHTML).toContain('<component-a></component-a>')
  })
})
