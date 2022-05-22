import React from 'react';

const SideMenuItem = (props) => (
  <p>
    <a
      href={props.link}
      target='_blank'
      style={{ cursor: 'pointer' }}
      rel='noreferrer'
    >
      {props.children}
    </a>
  </p>
);

export default SideMenuItem;
