import styles from "./About.module.scss";
import { useRef } from "react";

export interface ResponseAbout {
  id: string;
  title: string;
  message: string;
}
interface Props {
  aboutText?: string;
  imgText?: string;
  arrayResponse?: ResponseAbout[];
  nameComponent: string;
}

export function About({
  aboutText,
  imgText,
  arrayResponse,
  nameComponent,
}: Props) {
  return (
    <>
      {(aboutText || arrayResponse) && (
        <div className={styles.layout1ContainerAbout} id={`${nameComponent}`}>
          <h2>{nameComponent}</h2>
          <div id={styles.wrapper}>
            {imgText && <img src={imgText} alt="logoEmpresa" />}
            <p>{aboutText}</p>
            <table>
              {arrayResponse?.map((response) => (
                <tr key={response.id}>
                  <h3>{response.title}</h3>
                  <p>{response.message}</p>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
    </>
  );
}
