# popper-max-size-modifier

A [Popper.js](https://popper.js.org) modifier to change the size of your popper to fit it within the available viewport space.

## Installation

```bash
# With npm
npm i popper-max-size-modifier

# With Yarn
yarn add popper-max-size-modifier
```

## Usage

```js
import {createPopper} from '@popperjs/core';
import maxSize from 'popper-max-size-modifier';

// Create your own apply modifier that mutates the popper element's styles:
const applyMaxSize = {
  name: 'applyMaxSize',
  enabled: true,
  phase: 'write',
  requires: ['maxSize'],
  fn({state}) {
    // The `maxSize` modifier provides this data
    const {width, height} = state.modifiersData.maxSize;

    state.elements.popper.style.maxWidth = `${width}px`;
    state.elements.popper.style.maxHeight = `${height}px`;
  }
};

createPopper(reference, popper, {
  modifiers: [maxSize, applyMaxSize]
});
```

Sometimes you may want the `flip` modifier to take precedence in cases where the `maxSize` modifier will make the popper too small (e.g. a minimum acceptable size):

```js
// Minimum acceptable size is 100px
state.elements.popper.style.maxWidth = `${Math.max(100, width)}px`;
state.elements.popper.style.maxHeight = `${Math.max(100, height)}px`;
```
