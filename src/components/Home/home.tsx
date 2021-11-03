import styles from "./Home.module.scss";

interface Props {
  nameCompany: string;
  slogan?: string;
  imagemPrincipal: string;
}

export function Home({ nameCompany, slogan = "", imagemPrincipal }: Props) {
  return (
    <div
      className={styles.layout1ContainerHome}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagemPrincipal})`,
      }}
      id={"Home"}
    >
      <div>
        <h1>{nameCompany.toUpperCase()}</h1>
        <h3>{slogan}</h3>
      </div>
    </div>
  );
}
