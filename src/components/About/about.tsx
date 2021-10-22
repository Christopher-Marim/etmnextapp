import styles from "./About.module.scss";

export interface ResponseAbout {
  id: string;
  title: string;
  message: string;
}
interface Props {
  aboutText?: string;
  imgText?: string;
  arrayResponse?: ResponseAbout[];
}

export function About({ aboutText, imgText, arrayResponse }: Props) {
  return (
    <>
      {(aboutText || arrayResponse) && (
        <div id={styles.layout1ContainerAbout}>
          <h2>Sobre</h2>
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
