import styles from "./Home.module.scss";

interface Props {
  nameCompany: string;
  slogan?: string;
}

export function Home({ nameCompany, slogan = "" }: Props) {
  return (
    <div id={styles.layout1ContainerHome}>
      <img src="https://opetroleo.com.br/wp-content/uploads/2017/05/plataforma-petroleo-cima.jpg"></img>
      <div>
        <h1>{nameCompany.toUpperCase()}</h1>
        <h3>{slogan}</h3>
      </div>
    </div>
  );
}
