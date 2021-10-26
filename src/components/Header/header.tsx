import { useState } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  options: Option[];
}

export interface Option {
  id: number;
  name: string;
}

export function Header({ options }: HeaderProps) {
  const [style, setStyle] = useState({
    background: "rgba(0, 0, 0, 0.0)",
  });

  if (typeof window !== "undefined") {
    window.onscroll = () => navbarScroll();
  }

  function navbarScroll() {
    var y = window.scrollY;
    if (y > 30) {
      setStyle({ background: "rgba(0, 0, 0, 0.50)" });
    } else if (y < 30) {
      setStyle({ background: "rgba(0, 0, 0, 0.0)" });
    }
  }

  return (
    <div id={styles.layout1Container} style={{ ...style }}>
      <img
        src="https://www.redflag.com.br/images/logo-wide@2x.png"
        alt="logo"
      />
      <div className={styles.wrapper}>
        {options.map((option) => (
          <a href={`#${option.name}`} key={option.id}>
            {option.name.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}
