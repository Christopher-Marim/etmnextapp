import styles from "./About.module.scss";
import { useRef } from "react";

export interface ResponseAbout {
  id: string;
  title: string;
  message: string;
}
interface Props {
  aboutText?: string;
  aboutRender?: string;
  arrayResponse?: ResponseAbout[];
  nameComponent: string;
}

export function About({
  aboutText,
  aboutRender,
  arrayResponse,
  nameComponent,
}: Props) {
  return (
    <>
      {(aboutText || arrayResponse) && (
        <div className={styles.layout1ContainerAbout} id={`${nameComponent}`}>
          {aboutRender && (
            <>
            <h2>{nameComponent}</h2>
            <div dangerouslySetInnerHTML={{ __html: aboutRender }}></div>
            </>
          )}
        </div>
      )}
    </>
  );
}
