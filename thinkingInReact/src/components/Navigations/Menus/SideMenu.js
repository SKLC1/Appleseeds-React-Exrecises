import React from 'react';
import * as burgerMenu from 'react-burger-menu';

const SideMenu = (props) => (
  <div>
    <burgerMenu.slide
      isOpen={props.isOpen}
      pageWrapId={props.pageWrapId || 'page-wrap'}
    >
      {props.children}
    </burgerMenu.slide>
  </div>
);

export default SideMenu;
