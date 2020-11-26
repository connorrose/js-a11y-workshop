import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Dropdown from '../dropdown'

describe(`Dropdown`, () => {
  it(`renders activatorText`, () => {
    const activatorText = `Hamburgers`
    const { getByText } = render(<Dropdown activatorText={activatorText} />)

    const text = getByText(activatorText)

    expect(text).toBeInTheDocument()
  })

  it('renders a focusable button that activates the dropdown', () => {
    const activatorText = 'Dogs'
    const dropdownItems = [
      {
        text: 'item 1',
        url: '#'
      },
      {
        text: 'item 2',
        url: '#'
      }
    ]
    const { getByTestId } = render(<Dropdown activatorText={activatorText} items={dropdownItems} />)

    const activator = getByTestId('dropdown-activator')
    activator.focus();

    expect(activator).toHaveFocus();

    fireEvent.click(activator);
    const dropdownList = getByTestId('dropdown-itemList');
    const firstAnchor = dropdownList.querySelector('a');

    expect(firstAnchor).toHaveFocus();
  })
})
