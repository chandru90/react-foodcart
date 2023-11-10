import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chans corner</h1>
        <HeaderCartButton onclick ={props.setcart} />
      </header>
      <div className={classes['main-image']}>
        
      </div>
    </Fragment>
  );
};

export default Header;