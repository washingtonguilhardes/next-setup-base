import React from 'react';

import { render, cleanup } from '@testing-library/react';

import Example from './Example';

afterEach(cleanup);

describe('Example', () => {
  it('render', () => {
    const { container } = render(<Example />);
    expect(container.getElementsByTagName('ul')).toHaveLength(1);
  });
  it('snapshot', () => {
    const { container } = render(
      <Example>
        <span>ok</span>
      </Example>
    );
    expect(container).toMatchSnapshot();
  });
});
