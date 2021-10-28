import styles from "./About.module.scss";

interface Props {
  aboutRender?: string;
  nameComponent: string;
}

export function About({ aboutRender, nameComponent }: Props) {
  return (
    <>
      {aboutRender && (
        <div className={styles.layout1ContainerAbout} id={`${nameComponent}`}>
          <h2>{nameComponent}</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutRender }}></div>
        </div>
      )}
    </>
  );
}
