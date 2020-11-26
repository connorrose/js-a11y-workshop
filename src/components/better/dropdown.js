import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const clickHandler = () => {
    setIsOpen((state) => !state)
  }

  const keyHandler = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        activatorRef.current.focus();
        break;
      default:
        // Do nothing
    }
  }

  const clickOutsideHandler = (e) => {
    if (
      !(activatorRef.current.contains(e.target)
      || dropdownListRef.current.contains(e.target))
    ) setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen && items.length) {
      dropdownListRef.current.querySelector('a').focus();
      document.addEventListener('mousedown', clickOutsideHandler)
    }

    return () => document.removeEventListener('mousedown', clickOutsideHandler)
  }, [isOpen])

  return (
      <div
          className="dropdown-wrap"
          onKeyUp={keyHandler}
      >
        <button
          aria-haspopup="true"
          aria-controls="dropdown1"
          data-testid="dropdown-activator"
          onClick={clickHandler}
          ref={activatorRef}
          className="dropdown-activator"
         >
          {activatorText}
        </button>
        <ul
          id="dropdown1"
          ref={dropdownListRef}
          className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
          role="list"
          data-testid="dropdown-itemList"
        >
          {items.map((item) => (
            <li role="listitem" key={`${item.text}-${item.url}`}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>

      </div>
  )
}
export default Dropdown
