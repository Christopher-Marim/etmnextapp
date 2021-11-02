import {
  useEffect,
  useState,
} from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  options: Option[];
  logo: string;
}

export interface Option {
  id: number;
  name: string;
}

const I18N_STORAGE_KEY = "i18nextLng";

export function Header({ options, logo }: HeaderProps) {
  const [language, setLanguage] = useState("");
  const [style, setStyle] = useState({
    background: "rgba(0, 0, 0, 0.0)",
  });

  useEffect(() => {
    setLanguage(
      (typeof window !== "undefined" &&
        localStorage.getItem(I18N_STORAGE_KEY)) as string
    );
  }, []);


  if (typeof window !== "undefined") {
    window.onscroll = () => navbarScroll();
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
      console.log('dalee')
      window.location.reload();
    }
  };

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
      <img src={logo} alt="logo" />
      <div className={styles.wrapper}>
        {options.map((option) => (
          <a href={`#${option.name}`} key={option.id}>
            {option.name.toUpperCase()}
          </a>
        ))}
        <select onChange={handleSelectChange} value={language}>
          <option value="pt-BR">PT-BR</option>
          <option value="en-US">EN-US</option>
        </select>
      </div>
    </div>
  );
}
