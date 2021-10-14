import { useState } from "react";
import { Option } from "../../../pages/layout1";
import { Container, Wrapper } from "./styles";

interface HeaderProps {
  options: Option[];
}

export function Header({ options }: HeaderProps) {
  const [style, setStyle] = useState({ background: "rgba(0, 0, 0, 0.0)", color: "black"});

  if (typeof window !== "undefined") {
    window.onscroll = () => navbarScroll();
  }

  function navbarScroll() {
    var y = window.scrollY;
    if (y > 30) {
      setStyle({ background: "rgba(0, 0, 0, 0.25)", color: "white" });
    } else if (y < 30) {
      setStyle({ background: "rgba(0, 0, 0, 0.0)",  color: "black" });
    }
  }

  return (
    <Container style={{ ...style }}>
      <img src="https://www.redflag.com.br/images/logo-wide.png" alt="logo" />
      <Wrapper>
        {options.map((option) => (
          <button style={{color:style.color}} key={option.id}>{option.name}</button>
        ))}
      </Wrapper>
    </Container>
  );
}
