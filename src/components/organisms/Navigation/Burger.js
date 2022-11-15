import React, { useState } from 'react';
import { BurgerWrapper } from './Burger.styles';
import LeftNavigation from './LeftNavigation';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <LeftNavigation open={open} />
    </>
  );
};

export default Burger;
