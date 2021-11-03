import { useEffect, useState } from "react";
import { resultLanguages } from "../../pages";
import styles from "./Header.module.scss";
import { useRouter } from 'next/router'

interface HeaderProps {
  options: Option[];
  logo: string;
  languages: resultLanguages[];
}

export interface Option {
  id: number;
  name: string;
}

const I18N_STORAGE_KEY = "i18nextLng";

export function Header({ options, logo, languages }: HeaderProps) {
  const [language, setLanguage] = useState("");
  const [style, setStyle] = useState({
    background: "rgba(0, 0, 0, 0.0)",
  });

  const router = useRouter()

  useEffect(() => {
    setLanguage(
      (typeof window !== "undefined" &&
        localStorage.getItem('language_id')) as string
    );
  }, []);

  if (typeof window !== "undefined") {
    window.onscroll = () => navbarScroll();
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language_id", event.target.value);
      if(event.target.value=='1'){
        router.push('/')
      }
      if(event.target.value=='2'){
        router.push('/en')
      }
      if(event.target.value=='3'){
        router.push('/es')
      }
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
          <a
            href={`#${option.name}`}
            style={{ borderBottomColor: "#169179" }}
            key={option.id}
          >
            {option.name.toUpperCase()}
          </a>
        ))}
        <select onChange={handleSelectChange} value={language}>
          {languages.map((lng) => (
            <option key={lng.id} value={`${lng.language_id}`}>
              {lng.abreviation}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
