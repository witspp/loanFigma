import React from "react";
import {
  Main1,
  Part1,
  Part2,
  Part3,
  Button,
  Button2,
  Part4,
  MainWrapper,
} from "../style/navStyle";
import logo from "../images/Vector.png";
import logos from "../images/arrow.png";

const Navbar = () => {
  return (
    <MainWrapper>
      <Main1>
        <Part1>Good loans</Part1>
        <Part2>
          <Button>Continue your application</Button>
        </Part2>
        <Part3>
          <Button2>Affinidi Wallet</Button2>
        </Part3>
        <Part4>
          <img src={logo} alt="load" />
          <span>English</span>
          <img src={logos} alt="load" />
        </Part4>
      </Main1>
    </MainWrapper>
  );
};

export default Navbar;
