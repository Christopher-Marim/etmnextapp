
import styles from "./About.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  aboutRender?: string;
  nameComponent: string;
}

export function About({ aboutRender, nameComponent, ...rest }: Props) {
  return (
    <>
      {aboutRender && (
        <div {...rest} className={styles.layout1ContainerAbout} id={`${nameComponent}`}>
          <h2>{nameComponent}</h2>
          <div dangerouslySetInnerHTML={{ __html: aboutRender }}></div>
        </div>
      )}
    </>
  );
}
