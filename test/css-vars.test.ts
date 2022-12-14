import { assert, describe, expect, it } from 'vitest';

import './main.css';

describe('Suite name', () => {
  it('Should load css with vars', () => {
    const div = document.createElement('div');
    div.innerText = 'bar';
    document.body.appendChild(div);

    console.log(document.body.outerHTML);

    const color = getComputedStyle(div).color;
    expect(color).toBe('red');
  });
});