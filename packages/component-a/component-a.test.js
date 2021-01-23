import { within } from '@testing-library/dom'
import { ComponentA, tagName } from './component-a'

describe('ComponenetA', () => {

  it('Renders ComponentA', () => {
    window.customElements.define(tagName, ComponentA)
    let element = document.createElement(tagName)
    document.body.appendChild(element)

    const { getByTestId } = within(element.shadowRoot)
    element = getByTestId('componentA')
    expect(element).toBeTruthy
  })
})
