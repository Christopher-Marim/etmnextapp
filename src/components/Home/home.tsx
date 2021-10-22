import styles from "./Home.module.scss";

interface Props {
  nameCompany: string;
  slogan?: string;
}

export function Home({ nameCompany, slogan = "" }: Props) {
  return (
    <div id={styles.layout1ContainerHome}>
      <div>
        <h1>{nameCompany.toUpperCase()}</h1>
        <h3>{slogan}</h3>
      </div>
    </div>
  );
}
