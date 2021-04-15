import React, { PropsWithChildren } from 'react';

const Example = (props: PropsWithChildren<{}>) => {
  return (
    <div>
      <ul>
        <li>{props.children}</li>
      </ul>
    </div>
  );
};

export default Example;
