/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';
import logo  from '../assets/images/logo.png'
export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      {/* <p className="text-theme-blue text-4xl">
        Nikk
        <span className="text-theme-purple">Tech</span>
      </p> */}
      <p className="text-theme-blue text-4xl">
        <img src={logo} style={{width: '15%', height: '10%'}}/>
      </p>
    </Button>
  );
}
