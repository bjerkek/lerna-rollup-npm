import { within } from '@testing-library/dom'
import { ComponentB, tagName } from './component-b'

describe('ComponentB', () => {

  it('Renders ComponentB', () => {
    window.customElements.define(tagName, ComponentB)
    let element = document.createElement(tagName)
    document.body.appendChild(element)

    const { getByTestId } = within(element.shadowRoot)
    element = getByTestId('componentB')
    expect(element).toBeTruthy
  })
})
