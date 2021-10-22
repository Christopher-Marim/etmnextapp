import styles from "./Home.module.scss";

interface Props {
  nameCompany: string;
}

export function Home({ nameCompany }: Props) {
  return (
    <div id={styles.layout1ContainerHome}>
      <img src="https://opetroleo.com.br/wp-content/uploads/2017/05/plataforma-petroleo-cima.jpg"></img>
      <h1>{nameCompany.toUpperCase()}</h1>
    </div>
  );
}
