import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCars } from '../../features/car/carSlice';
import { 
  Container, 
  Menu, 
  Img, 
  RightMenu, 
  CustomMenu,
  CustomClose, 
  BurgerNav,
  CloseWrapper 
} from './styles';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log("cars", cars);

  return (
    <Container>
      <a>
        <Img src="/images/logo2.svg" alt=""/>
      </a>
      <Menu>
        {cars && cars.map((car, index ) => (
          <a key={index} href="#">{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href="#" >Shop</a>
        <a href="#" >Tesla Account</a>
        <CustomMenu 
          onClick={() => setBurgerStatus(true)}
        />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose 
            onClick={() => setBurgerStatus(false)}
          />
        </CloseWrapper>
        {cars && cars.map((car, index ) => (
          <li key={index}>
            <a key={index} href="#">{car}</a>
          </li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Invetory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header