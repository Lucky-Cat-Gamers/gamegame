import React from 'react';

import { version } from '../../../package.json';

import './styles.scss';

const Footer = () => {
  return(
    <div className='footer__container'>

      <span>{`Makeover with ♥ by the Lucky Cat Gamers - v${version} - `}</span>

      <a className='footer__link'
        href='https://github.com/Lucky-Cat-Gamers'
        target='_blank'
        rel='noopener noreferrer'>
        {'View Source'}
      </a>
      <br /><br />

      <span>{`Original game by Andrew Steinheiser  - `}</span>
  
      <a className='footer__link'
        href='https://github.com/ASteinheiser/react-rpg.com'
        target='_blank'
        rel='noopener noreferrer'>
        {'View Source'}
      </a>
    </div>
  );
};

export default Footer;